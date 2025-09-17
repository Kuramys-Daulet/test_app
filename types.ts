
import type React from 'react';

export type TopologyType = 'Bus' | 'Star' | 'Ring' | 'Mesh' | 'Tree' | 'Hybrid';

export interface Topology {
  id: TopologyType;
  name: string;
  description: string;
  dataTransmission: string;
  advantages: string[];
  disadvantages: string[];
  analogy: string;
  visualizationIdea: string;
  AnimationComponent: React.FC;
}
