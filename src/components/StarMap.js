import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const StarMap = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedStar, setSelectedStar] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Pulsar data with real discoveries from FAST
  const pulsars = [
    { name: 'PSR J1859-01', ra: 284.75, dec: -1.23, distance: 4100, period: 0.59, color: 0x00D4FF },
    { name: 'PSR J1931-01', ra: 292.75, dec: -1.23, distance: 16000, period: 1.83, color: 0xFFD700 },
    { name: 'PSR J1950+2414', ra: 297.5, dec: 24.23, distance: 8500, period: 0.94, color: 0xFF6B35 },
    { name: 'PSR J1946+24', ra: 296.5, dec: 24.5, distance: 12000, period: 1.25, color: 0xFF1493 },
    { name: 'PSR J1929+20', ra: 292.25, dec: 20.8, distance: 6700, period: 0.78, color: 0x20B2AA },
    { name: 'PSR J1903+21', ra: 285.75, dec: 21.2, distance: 9800, period: 1.45, color: 0x9370DB },
    { name: 'PSR J1918+20', ra: 289.5, dec: 20.5, distance: 5400, period: 0.67, color: 0x00FA9A },
    { name: 'PSR J1935+25', ra: 293.75, dec: 25.8, distance: 11300, period: 1.12, color: 0xFFB6C1 },
    { name: 'PSR J1942+23', ra: 295.5, dec: 23.4, distance: 8900, period: 0.89, color: 0xFFA500 },
    { name: 'PSR J1921+22', ra: 290.25, dec: 22.1, distance: 7600, period: 1.03, color: 0x98FB98 }
  ];

  useEffect(() => {
    if (!mountRef.current || isLoaded) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000011);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 50;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create star field
    const createStarField = () => {
      const starGeometry = new THREE.BufferGeometry();
      const starCount = 3000;
      const positions = new Float32Array(starCount * 3);
      const colors = new Float32Array(starCount * 3);

      for (let i = 0; i < starCount * 3; i += 3) {
        // Random positions in a sphere
        const radius = 200 + Math.random() * 300;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        positions[i] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i + 2] = radius * Math.cos(phi);

        // Random star colors
        const color = new THREE.Color();
        color.setHSL(Math.random() * 0.2 + 0.5, 0.55, Math.random() * 0.25 + 0.75);
        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
      }

      starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const starMaterial = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
      });

      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);
      return stars;
    };

    const stars = createStarField();

    // Create pulsars
    const createPulsars = () => {
      const pulsarGroup = new THREE.Group();
      
      pulsars.forEach((pulsar, index) => {
        // Convert celestial coordinates to 3D positions
        const phi = (90 - pulsar.dec) * (Math.PI / 180);
        const theta = (pulsar.ra + 180) * (Math.PI / 180);
        const radius = 30 + (pulsar.distance / 1000); // Scale distance
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);

        // Pulsar sphere
        const geometry = new THREE.SphereGeometry(0.3 + pulsar.period * 0.1, 16, 16);
        const material = new THREE.MeshBasicMaterial({ 
          color: pulsar.color,
          transparent: true,
          opacity: 0.9
        });
        const pulsarMesh = new THREE.Mesh(geometry, material);
        pulsarMesh.position.set(x, y, z);
        pulsarMesh.userData = { ...pulsar, index };

        // Pulsar beam
        const beamGeometry = new THREE.ConeGeometry(0.1, 2, 8);
        const beamMaterial = new THREE.MeshBasicMaterial({ 
          color: pulsar.color,
          transparent: true,
          opacity: 0.6
        });
        const beam = new THREE.Mesh(beamGeometry, beamMaterial);
        beam.position.set(x, y + 1, z);
        beam.rotation.x = Math.PI;

        // Glow effect
        const glowGeometry = new THREE.SphereGeometry(0.8, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: pulsar.color,
          transparent: true,
          opacity: 0.2
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.set(x, y, z);

        pulsarGroup.add(pulsarMesh);
        pulsarGroup.add(beam);
        pulsarGroup.add(glow);
      });

      scene.add(pulsarGroup);
      return pulsarGroup;
    };

    const pulsarGroup = createPulsars();

    // Mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    const handleClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(pulsarGroup.children);
      
      if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        if (clickedObject.userData && clickedObject.userData.name) {
          setSelectedStar(clickedObject.userData);
        }
      } else {
        setSelectedStar(null);
      }
    };

    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('click', handleClick);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate star field slowly
      stars.rotation.y += 0.0002;
      stars.rotation.x += 0.0001;

      // Animate pulsars (pulse effect)
      const time = Date.now() * 0.001;
      pulsarGroup.children.forEach((child, index) => {
        if (child.userData && child.userData.period) {
          const pulse = Math.sin(time * (2 / child.userData.period)) * 0.3 + 0.7;
          if (child.material) {
            child.material.opacity = pulse;
          }
          if (child.geometry && child.geometry.type === 'SphereGeometry') {
            child.scale.setScalar(pulse);
          }
        }
      });

      // Camera movement based on mouse
      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
      camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('click', handleClick);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isLoaded]);

  return (
    <div className="star-map-container">
      <div 
        ref={mountRef} 
        className="star-map-canvas"
        style={{ 
          width: '100%', 
          height: '600px', 
          borderRadius: '16px',
          overflow: 'hidden',
          position: 'relative'
        }}
      />
      
      {/* Control Panel */}
      <div className="control-panel glass-card">
        <h3>星空观测控制面板</h3>
        <div className="controls">
          <div className="control-group">
            <label>观测模式:</label>
            <select>
              <option value="pulsar">脉冲星观测</option>
              <option value="frb">快速射电暴</option>
              <option value="neutral">中性氢巡天</option>
            </select>
          </div>
          <div className="control-group">
            <label>时间缩放:</label>
            <input type="range" min="0.1" max="10" step="0.1" defaultValue="1" />
          </div>
          <div className="control-group">
            <label>显示标签:</label>
            <input type="checkbox" defaultChecked />
          </div>
        </div>
        <p className="instruction">点击星体查看详细信息 | 鼠标移动控制视角</p>
      </div>

      {/* Star Info Panel */}
      {selectedStar && (
        <div 
          className="star-info glass-card"
          style={{
            position: 'fixed',
            left: mousePos.x + 20,
            top: mousePos.y - 100,
            zIndex: 1000,
            pointerEvents: 'none'
          }}
        >
          <h4>{selectedStar.name}</h4>
          <div className="star-details">
            <p><strong>距离:</strong> {selectedStar.distance.toLocaleString()} 光年</p>
            <p><strong>周期:</strong> {selectedStar.period} 秒</p>
            <p><strong>赤经:</strong> {selectedStar.ra.toFixed(2)}°</p>
            <p><strong>赤纬:</strong> {selectedStar.dec.toFixed(2)}°</p>
            <p><strong>类型:</strong> 脉冲星</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .star-map-container {
          position: relative;
          margin: 2rem 0;
        }

        .star-map-canvas {
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .control-panel {
          margin-top: 2rem;
          padding: 2rem;
          border-radius: 16px;
        }

        .control-panel h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #00D4FF;
        }

        .controls {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 1rem;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .control-group label {
          font-weight: 600;
          color: #E2E8F0;
        }

        .control-group select,
        .control-group input[type="range"] {
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: #F8FAFC;
        }

        .control-group input[type="checkbox"] {
          width: 20px;
          height: 20px;
        }

        .instruction {
          text-align: center;
          color: #94A3B8;
          font-style: italic;
        }

        .star-info {
          padding: 1.5rem;
          min-width: 250px;
          border-radius: 12px;
          pointer-events: none;
        }

        .star-info h4 {
          font-size: 1.2rem;
          color: #00D4FF;
          margin-bottom: 1rem;
        }

        .star-details p {
          margin: 0.5rem 0;
          font-size: 0.9rem;
          color: #E2E8F0;
        }

        .star-details strong {
          color: #FFD700;
        }

        @media (max-width: 768px) {
          .star-map-canvas {
            height: 400px;
          }

          .controls {
            grid-template-columns: 1fr;
          }

          .control-panel {
            padding: 1.5rem;
          }

          .star-info {
            left: 10px !important;
            right: 10px !important;
            top: auto !important;
            bottom: 100px !important;
            min-width: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default StarMap;