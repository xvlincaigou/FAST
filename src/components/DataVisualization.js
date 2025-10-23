import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const DataVisualization = ({ type, data, options = {} }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Initialize chart
    chartInstance.current = echarts.init(chartRef.current);

    // Set chart options based on type
    const chartOptions = getChartOptions(type, data, options);
    chartInstance.current.setOption(chartOptions);

    // Handle resize
    const handleResize = () => {
      if (chartInstance.current) {
        chartInstance.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (chartInstance.current) {
        chartInstance.current.dispose();
      }
    };
  }, [type, data, options]);

  const getChartOptions = (type, data, customOptions) => {
    const baseOptions = {
      backgroundColor: 'transparent',
      textStyle: {
        color: '#E2E8F0'
      },
      tooltip: {
        backgroundColor: 'rgba(11, 20, 38, 0.9)',
        borderColor: '#00D4FF',
        textStyle: {
          color: '#F8FAFC'
        }
      },
      legend: {
        textStyle: {
          color: '#94A3B8'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        axisLine: {
          lineStyle: {
            color: '#94A3B8'
          }
        },
        axisLabel: {
          color: '#94A3B8'
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(148, 163, 184, 0.2)'
          }
        }
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: '#94A3B8'
          }
        },
        axisLabel: {
          color: '#94A3B8'
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(148, 163, 184, 0.2)'
          }
        }
      }
    };

    switch (type) {
      case 'pulsarDiscovery':
        return {
          ...baseOptions,
          title: {
            text: 'FAST脉冲星发现统计',
            textStyle: {
              color: '#E2E8F0',
              fontSize: 18
            }
          },
          tooltip: {
            ...baseOptions.tooltip,
            trigger: 'axis'
          },
          legend: {
            ...baseOptions.legend,
            data: ['累计发现', '年度发现']
          },
          xAxis: {
            ...baseOptions.xAxis,
            type: 'category',
            data: data.years || ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
          },
          yAxis: {
            ...baseOptions.yAxis,
            type: 'value'
          },
          series: [
            {
              name: '累计发现',
              type: 'line',
              data: data.cumulative || [2, 44, 120, 280, 500, 740, 1000],
              itemStyle: {
                color: '#00D4FF'
              },
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: 'rgba(0, 212, 255, 0.3)' },
                    { offset: 1, color: 'rgba(0, 212, 255, 0.05)' }
                  ]
                }
              }
            },
            {
              name: '年度发现',
              type: 'bar',
              data: data.annual || [2, 42, 76, 160, 220, 240, 260],
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: '#FFD700' },
                    { offset: 1, color: '#FF6B35' }
                  ]
                }
              }
            }
          ]
        };

      case 'frbDistribution':
        return {
          ...baseOptions,
          title: {
            text: '快速射电暴色散量分布',
            textStyle: {
              color: '#E2E8F0',
              fontSize: 18
            }
          },
          tooltip: {
            ...baseOptions.tooltip,
            trigger: 'item'
          },
          xAxis: {
            ...baseOptions.xAxis,
            type: 'value',
            name: '色散量 (pc/cm³)',
            nameTextStyle: {
              color: '#94A3B8'
            }
          },
          yAxis: {
            ...baseOptions.yAxis,
            type: 'value',
            name: '持续时间 (ms)',
            nameTextStyle: {
              color: '#94A3B8'
            }
          },
          series: [{
            type: 'scatter',
            data: data.points || [
              [1205, 3.1],
              [297, 1.8],
              [192, 2.5],
              [364, 4.2],
              [588, 1.3],
              [745, 2.8],
              [421, 3.6],
              [289, 1.9]
            ],
            symbolSize: 20,
            itemStyle: {
              color: '#FF6B35',
              opacity: 0.8
            },
            emphasis: {
              itemStyle: {
                color: '#FF1493'
              }
            }
          }]
        };

      case 'telescopeComparison':
        return {
          ...baseOptions,
          title: {
            text: '世界主要射电望远镜对比',
            textStyle: {
              color: '#E2E8F0',
              fontSize: 18
            }
          },
          tooltip: {
            ...baseOptions.tooltip,
            trigger: 'axis'
          },
          legend: {
            ...baseOptions.legend,
            data: ['口径直径(米)', '相对灵敏度']
          },
          xAxis: {
            ...baseOptions.xAxis,
            type: 'category',
            data: data.telescopes || ['FAST', 'Arecibo', 'Effelsberg', 'Parkes']
          },
          yAxis: [
            {
              ...baseOptions.yAxis,
              type: 'value',
              name: '直径(米)',
              nameTextStyle: {
                color: '#94A3B8'
              }
            },
            {
              type: 'value',
              name: '灵敏度',
              nameTextStyle: {
                color: '#94A3B8'
              },
              axisLine: {
                lineStyle: {
                  color: '#94A3B8'
                }
              },
              axisLabel: {
                color: '#94A3B8'
              }
            }
          ],
          series: [
            {
              name: '口径直径(米)',
              type: 'bar',
              data: data.diameter || [500, 350, 100, 64],
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: '#00D4FF' },
                    { offset: 1, color: '#20B2AA' }
                  ]
                }
              }
            },
            {
              name: '相对灵敏度',
              type: 'line',
              yAxisIndex: 1,
              data: data.sensitivity || [100, 40, 15, 8],
              itemStyle: {
                color: '#FFD700'
              },
              lineStyle: {
                color: '#FFD700'
              }
            }
          ]
        };

      case 'skyCoverage':
        return {
          ...baseOptions,
          title: {
            text: 'FAST天空覆盖范围',
            textStyle: {
              color: '#E2E8F0',
              fontSize: 18
            }
          },
          tooltip: {
            ...baseOptions.tooltip,
            trigger: 'item'
          },
          series: [{
            type: 'pie',
            radius: ['40%', '70%'],
            data: data.coverage || [
              { value: 40, name: '可观测区域', itemStyle: { color: '#00D4FF' } },
              { value: 60, name: '不可观测区域', itemStyle: { color: '#94A3B8' } }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              color: '#E2E8F0'
            }
          }]
        };

      default:
        return baseOptions;
    }
  };

  return (
    <div className="data-visualization">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }} />
      
      <style jsx>{`
        .data-visualization {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default DataVisualization;