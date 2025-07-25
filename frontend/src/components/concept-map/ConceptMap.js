'use client'

import React, { useCallback, useState, useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ConnectionMode,
} from 'reactflow';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Calculator, 
  Microscope, 
  Globe,
  CheckCircle,
  Clock,
  Lock,
  Star,
  Target,
  TrendingUp,
  Atom,
  Dna,
  Zap
} from 'lucide-react';

import 'reactflow/dist/style.css';

// Import concept map data
import { scienceNodes, scienceEdges } from '@/data/concept-maps/scienceMap';
import { mathematicsNodes, mathematicsEdges } from '@/data/concept-maps/mathematicsMap';

// Custom Node Component with category-based styling
const CustomNode = ({ data, selected }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'weak': return 'bg-red-500';
      case 'not-started': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'in-progress': return <Clock className="w-4 h-4 text-blue-600" />;
      case 'weak': return <TrendingUp className="w-4 h-4 text-red-600" />;
      case 'not-started': return <Lock className="w-4 h-4 text-gray-600" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'physics': return 'border-l-4 border-l-blue-500';
      case 'chemistry': return 'border-l-4 border-l-green-500';
      case 'biology': return 'border-l-4 border-l-purple-500';
      default: return '';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'physics': return <Zap className="w-3 h-3 text-blue-500" />;
      case 'chemistry': return <Atom className="w-3 h-3 text-green-500" />;
      case 'biology': return <Dna className="w-3 h-3 text-purple-500" />;
      default: return null;
    }
  };

  return (
    <Card className={`w-[180px] h-[160px] transition-all duration-300 hover:shadow-lg cursor-pointer ${
      selected ? 'ring-2 ring-blue-500 shadow-lg' : ''
    } ${data.status === 'weak' ? 'border-red-300 bg-red-50' : ''} ${getCategoryColor(data.category)}`}>
      <CardHeader className="pb-2 h-[60px] flex justify-between">
        <div className="flex items-center justify-between h-full">
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-1">
              {getCategoryIcon(data.category)}
              <CardTitle className="text-sm font-semibold leading-tight">{data.label}</CardTitle>
            </div>
          </div>
          {getStatusIcon(data.status)}
        </div>
      </CardHeader>
      <CardContent className="pt-0 h-[100px] flex flex-col justify-between">
        <div className="space-y-2 flex-1">
          <div className="flex items-center justify-between text-xs">
            <span>Progress</span>
            <span className="font-medium">{data.progress}%</span>
          </div>
          <Progress value={data.progress} className="h-2" />
          
          <div className="flex items-center justify-between text-xs">
            <Badge variant="outline" className={`${getDifficultyColor(data.difficulty)} text-xs px-1`}>
              {data.difficulty}
            </Badge>
            <span className="text-gray-600 text-xs">
              {data.completedQuestions}/{data.questionsCount}
            </span>
          </div>
        </div>

        {/* Fixed position for "Needs Practice" badge */}
        <div className="h-[20px] flex items-center">
          {data.status === 'weak' && (
            <div className="flex items-center gap-1 text-xs text-red-600 bg-red-100 px-2 py-1 rounded w-full justify-center">
              <Star className="w-3 h-3" />
              <span>Needs Practice</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

export default function ConceptMap({ subject = 'mathematics' }) {
  // Get appropriate nodes and edges based on subject - moved to useCallback
  const getSubjectData = useCallback(() => {
    switch (subject) {
      case 'science':
        return { nodes: scienceNodes, edges: scienceEdges };
      case 'mathematics':
        return { nodes: mathematicsNodes, edges: mathematicsEdges };
      default:
        return { nodes: mathematicsNodes, edges: mathematicsEdges };
    }
  }, [subject]);

  const { nodes: initialNodes, edges: initialEdges } = getSubjectData();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);

  // Update nodes and edges when subject changes - fixed dependency
  useEffect(() => {
    const { nodes: newNodes, edges: newEdges } = getSubjectData();
    setNodes(newNodes);
    setEdges(newEdges);
  }, [getSubjectData, setNodes, setEdges]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
  }, []);

  const handleStartPractice = () => {
    if (selectedNode) {
      // Navigate to practice selection page
      window.location.href = `/practice/${subject}/${selectedNode.id}`;
    }
  };

  const getWeakTopics = () => {
    return nodes.filter(node => node.data.status === 'weak');
  };

  const getSubjectInfo = () => {
    switch (subject) {
      case 'mathematics':
        return { title: 'Mathematics', icon: Calculator, color: 'text-blue-600' };
      case 'optional-mathematics':
        return { title: 'Optional Mathematics', icon: Target, color: 'text-green-600' };
      case 'science':
        return { title: 'Science', icon: Microscope, color: 'text-purple-600' };
      case 'english':
        return { title: 'English', icon: Globe, color: 'text-orange-600' };
      default:
        return { title: 'Mathematics', icon: Calculator, color: 'text-blue-600' };
    }
  };

  const getOverallProgress = () => {
    const totalProgress = nodes.reduce((sum, node) => sum + node.data.progress, 0);
    return Math.round(totalProgress / nodes.length);
  };

  // Get category-wise statistics for Science
  const getCategoryStats = () => {
    if (subject !== 'science') return null;

    const categories = ['physics', 'chemistry', 'biology'];
    return categories.map(category => {
      const categoryNodes = nodes.filter(node => node.data.category === category);
      const totalProgress = categoryNodes.reduce((sum, node) => sum + node.data.progress, 0);
      const avgProgress = categoryNodes.length > 0 ? Math.round(totalProgress / categoryNodes.length) : 0;
      
      return {
        name: category.charAt(0).toUpperCase() + category.slice(1),
        progress: avgProgress,
        completed: categoryNodes.filter(n => n.data.status === 'completed').length,
        total: categoryNodes.length,
        color: category === 'physics' ? 'text-blue-600' : 
               category === 'chemistry' ? 'text-green-600' : 'text-purple-600',
        bgColor: category === 'physics' ? 'bg-blue-50' : 
                 category === 'chemistry' ? 'bg-green-50' : 'bg-purple-50'
      };
    });
  };

  const subjectInfo = getSubjectInfo();
  const SubjectIcon = subjectInfo.icon;
  const categoryStats = getCategoryStats();

  return (
    <div className="w-full h-screen bg-gray-50">
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Concept Map</h2>
            <p className="text-gray-600">Visual learning path for Grade 10</p>
          </div>

          {/* Subject Display */}
          <div className="px-6 py-4 border-b">
            <div className={`flex items-center gap-3 p-3 rounded-lg bg-gray-50`}>
              <SubjectIcon className={`w-6 h-6 ${subjectInfo.color}`} />
              <h3 className="font-semibold text-lg">{subjectInfo.title}</h3>
            </div>
          </div>

          {/* Category Stats for Science */}
          {categoryStats && (
            <div className="p-4 border-b">
              <h4 className="font-semibold mb-3 text-gray-700">Subject Areas</h4>
              <div className="space-y-2">
                {categoryStats.map((category, index) => (
                  <div key={index} className={`p-2 rounded ${category.bgColor}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-medium ${category.color}`}>
                        {category.name}
                      </span>
                      <span className="text-xs text-gray-600">
                        {category.completed}/{category.total}
                      </span>
                    </div>
                    <Progress value={category.progress} className="h-1" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Weak Topics Alert */}
          {getWeakTopics().length > 0 && (
            <div className="px-4 pb-4">
              <Card className="border-red-200 bg-red-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-red-800 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Focus Areas
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {getWeakTopics().map((node) => (
                      <div key={node.id} className="flex items-center justify-between text-xs">
                        <span className="text-red-700">{node.data.label}</span>
                        <Badge variant="outline" className="bg-red-100 text-red-700 text-xs">
                          {node.data.progress}%
                        </Badge>
                      </div>
                    ))}
                    <Button size="sm" variant="outline" className="w-full mt-2 text-red-700 border-red-300">
                      Practice Weak Topics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Selected Topic Details */}
          {selectedNode && (
            <div className="px-4 pb-4 mt-auto">
              <Card className="border-blue-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-blue-800">
                    {selectedNode.data.label}
                  </CardTitle>
                  {selectedNode.data.category && (
                    <Badge variant="outline" className="text-xs w-fit">
                      {selectedNode.data.category}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs">
                      <span>Progress</span>
                      <span className="font-medium">{selectedNode.data.progress}%</span>
                    </div>
                    <Progress value={selectedNode.data.progress} className="h-2" />
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-600">Questions:</span>
                        <div className="font-medium">
                          {selectedNode.data.completedQuestions}/{selectedNode.data.questionsCount}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-600">Difficulty:</span>
                        <div className="font-medium capitalize">
                          {selectedNode.data.difficulty}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button 
                        onClick={handleStartPractice}
                        className="w-full" 
                        size="sm"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Start Practice
                      </Button>
                      
                      {selectedNode.data.status === 'weak' && (
                        <Button 
                          variant="outline" 
                          className="w-full border-red-300 text-red-700" 
                          size="sm"
                        >
                          <Target className="w-4 h-4 mr-2" />
                          Focused Practice
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Main Concept Map */}
        <div className="flex-1 relative">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            connectionMode={ConnectionMode.Loose}
            fitView
            attributionPosition="bottom-left"
            className="bg-gradient-to-br from-blue-50 to-indigo-100"
          >
            <Controls className="bg-white shadow-lg rounded-lg" />
            <MiniMap 
              className="bg-white shadow-lg rounded-lg"
              nodeColor={(node) => {
                switch (node.data?.status) {
                  case 'completed': return '#10b981';
                  case 'in-progress': return '#3b82f6';
                  case 'weak': return '#ef4444';
                  default: return '#6b7280';
                }
              }}
            />
            <Background color="#e5e7eb" gap={20} />
          </ReactFlow>

          {/* Legend - Bottom Left */}
          <div className="absolute bottom-4 left-4">
            <Card className="p-3 shadow-lg bg-white/95 backdrop-blur">
              <div className="space-y-3">
                <h3 className="font-semibold text-sm">Legend</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Completed</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>In Progress</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Weak</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span>Not Started</span>
                  </div>
                </div>
                
                {/* Science Category Legend */}
                {subject === 'science' && (
                  <div className="border-t pt-2 mt-2">
                    <h4 className="font-semibold text-xs mb-2">Categories</h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs">
                        <Zap className="w-3 h-3 text-blue-500" />
                        <span>Physics</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <Atom className="w-3 h-3 text-green-500" />
                        <span>Chemistry</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <Dna className="w-3 h-3 text-purple-500" />
                        <span>Biology</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}