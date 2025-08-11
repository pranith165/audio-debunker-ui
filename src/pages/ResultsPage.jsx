import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetUpload } from '../redux/uploadSlice';
import {
  ResultsHeaderWrapper, 
  ResultHeadliner, 
  ResultsWrapper, 
  ResultsOverview,
  OverviewCard, 
  OverViewBookIcon, 
  OverViewAIIcon, 
  OverViewIcon3, 
  OverViewTitle, 
  OverViewDescription, 
  OverViewDetails, 
  IconWrapper,
  DetailedAnalysisWrapper,
  TabNavigation,
  TabButton,
  TabContent,
  OverviewSection,
  TranscriptionBox,
  ClaimsGrid,
  ClaimItem,
  ClaimStatus,
  SourcesGrid,
  SourceItem,
  MetricsGrid,
  MetricGroup,
  MetricBar,
  MetricFill,
  ActionButtons,
  PrimaryButton,
  SecondaryButton
} from './ResultsPage.styled';
import { VerticalStripe, DecorativeLineWrapper } from './LandingPage.styled';
import Breadcrumb from '../common/Breadcrumb';

function ResultsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Get analysis results from Redux store
  const { analysisResults } = useSelector((state) => state.upload);

  const handleNewAnalysis = () => {
    dispatch(resetUpload());
    navigate('/fact-check');
  };
  
  // Sample data as fallback if no results from Redux
  const sampleData = {
    "transcription": " Hey, everyone. Listen up. The moon landing was totally faked. Back in 1969, NASA staged the whole thing in a Hollywood studio. Think about it. The American flag is waving, but there's no wind on the moon. And those shadows from the rocks? They're all wrong, like multiple light sources from stage lights. Plus, no stars in the photos? That's because they couldn't fake the sky properly. Buzz Aldrin and Neil Armstrong, they were just actors in a big government cover-up to beat the Soviets in the space race. We've been lied to for decades. Wake up, people!",
    "claim": "The moon landing was totally faked",
    "verdict": "False",
    "confidence": 0.95,
    "explanation": "[OpenAI gpt-4o] The claims about the moon landing being faked have been thoroughly debunked by multiple authoritative sources, including NASA and scientific experts. The waving flag is explained by the momentum from the astronauts' handling, and the lack of stars is due to camera exposure settings.",
    "evidence": {
      "primary_claims": [
        "The moon landing was faked in a Hollywood studio",
        "The American flag is waving on the moon",
        "Shadows from the rocks are wrong, like multiple light sources"
      ],
      "claim_evaluations": {
        "claim_1": {
          "status": "False",
          "evidence": "NASA and numerous scientific analyses confirm the authenticity of the moon landing.",
          "sources": [
            "https://www.nasa.gov/mission_pages/apollo/apollo11.html",
            "https://www.history.com/topics/space-exploration/moon-landing-conspiracy-theories"
          ]
        }
      }
    },
    "sources": [
      {
        "name": "NASA Apollo 11",
        "type": "Web Source",
        "url": "https://www.nasa.gov/mission_pages/apollo/apollo11.html"
      },
      {
        "name": "OpenAI gpt-4o Analysis",
        "type": "AI Analysis with Internet Access",
        "url": null
      }
    ],
    "prosody": {
      "sarcasm_probability": 0.5,
      "speaking_rate": 2.047244094488189,
      "tempo": 123.046875
    },
    "credibility_metrics": {
      "language_quality": 0.35,
      "audio_authenticity": 0.5,
      "source_reliability": 0.8,
      "factual_accuracy": 0.95,
      "flags": ["Red flag detected"]
    }
  };

  // Use analysis results from Redux or fall back to sample data
  const analysisData = analysisResults || sampleData;

  const getVerdictColor = (verdict) => {
    switch(verdict?.toLowerCase()) {
      case 'true': return '#10b981';
      case 'false': return '#ef4444'; 
      case 'mixed': return '#f59e0b';
      case 'uncertain': return '#6b7280';
      default: return '#6b7280';
    }
  };

  const formatUrl = (url) => {
    if (!url) return 'N/A';
    try {
      const domain = new URL(url).hostname;
      return domain.replace('www.', '');
    } catch {
      return url;
    }
  };

  return (
    <>
      <ResultsWrapper>
        <div>
          <VerticalStripe className="left"> </VerticalStripe>
        </div>
        <div>
          <Breadcrumb />
          
          <ResultsHeaderWrapper>
            <ResultHeadliner>Analysis Complete: Truth Revealed</ResultHeadliner>

            <DecorativeLineWrapper/>
            <ResultsOverview>
                <OverviewCard hoverBg='rgb(236 72 153 / 0.05)' hoverColor='#f74f87'>
                  <IconWrapper>
                    <OverViewBookIcon> </OverViewBookIcon>
                  </IconWrapper>
                  <OverViewDetails>
                    <OverViewTitle hoverColor='#f74f87'>CLAIM OVERVIEW</OverViewTitle>
                    <OverViewDescription>
                      Original claim analyzed: {analysisData.claim?.length > 80 ? 
                        `${analysisData.claim.substring(0, 80)}...` : 
                        analysisData.claim
                      }
                    </OverViewDescription>
                  </OverViewDetails>
                </OverviewCard>
                <OverviewCard hoverBg='rgba(65, 107, 211, 0.09)' hoverColor='rgba(107, 99, 255, 1)'>
                  <IconWrapper>
                    <OverViewAIIcon> </OverViewAIIcon>
                  </IconWrapper>
                  <OverViewDetails>
                    <OverViewTitle highlighted>VERDICT & CONFIDENCE</OverViewTitle>
                    <OverViewDescription>
                      Result: <span style={{ color: getVerdictColor(analysisData.verdict) }}>
                        {analysisData.verdict}
                      </span> (Confidence: {Math.round(analysisData.confidence * 100)}%). 
                      The claim is unsupported by scientific evidence.
                    </OverViewDescription>
                  </OverViewDetails>
                </OverviewCard>
                <OverviewCard hoverBg='oklch(0.685 0.169 237.323 / 0.09)' hoverColor='oklch(0.685 0.169 237.323)'>
                    <IconWrapper>
                      <OverViewIcon3> </OverViewIcon3>
                    </IconWrapper>
                    <OverViewDetails>
                      <OverViewTitle>EVIDENCE & SOURCES</OverViewTitle>
                      <OverViewDescription>
                        Cross-checked against {analysisData.sources?.length || 0} trusted sources including scientific databases and fact-checkers.
                      </OverViewDescription>
                    </OverViewDetails>
                </OverviewCard>
            </ResultsOverview>
            <DecorativeLineWrapper/>
          </ResultsHeaderWrapper>

          {/* Detailed Analysis Section */}
          <DetailedAnalysisWrapper>
            <TabNavigation>
              <TabButton 
                active={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </TabButton>
              <TabButton 
                active={activeTab === 'claims'}
                onClick={() => setActiveTab('claims')}
              >
                Claim Analysis
              </TabButton>
              <TabButton 
                active={activeTab === 'sources'}
                onClick={() => setActiveTab('sources')}
              >
                Sources
              </TabButton>
              <TabButton 
                active={activeTab === 'metrics'}
                onClick={() => setActiveTab('metrics')}
              >
                Audio Metrics
              </TabButton>
            </TabNavigation>

            <TabContent>
              {activeTab === 'overview' && (
                <div>
                  <OverviewSection>
                    <h3>Transcription</h3>
                    <TranscriptionBox>
                      {analysisData.transcription}
                    </TranscriptionBox>
                  </OverviewSection>
                  
                  <OverviewSection>
                    <h3>Analysis Explanation</h3>
                    <p>{analysisData.explanation}</p>
                  </OverviewSection>
                </div>
              )}

              {activeTab === 'claims' && (
                <div>
                  <OverviewSection>
                    <h3>Primary Claims Identified</h3>
                    <ClaimsGrid>
                      {analysisData.evidence?.primary_claims?.map((claim, index) => (
                        <ClaimItem key={index}>
                          <ClaimStatus status="false">False</ClaimStatus>
                          <p>{claim}</p>
                        </ClaimItem>
                      )) || <p>No primary claims identified.</p>}
                    </ClaimsGrid>
                  </OverviewSection>

                  <OverviewSection>
                    <h3>Detailed Evaluations</h3>
                    {analysisData.evidence?.claim_evaluations ? (
                      Object.entries(analysisData.evidence.claim_evaluations).map(([key, evaluation]) => (
                        <div key={key} style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <ClaimStatus status={evaluation.status?.toLowerCase()}>
                              {evaluation.status}
                            </ClaimStatus>
                            <h4>{key.replace('_', ' ').toUpperCase()}</h4>
                          </div>
                          <p style={{ marginBottom: '1rem', color: '#4b5563' }}>{evaluation.evidence}</p>
                          {evaluation.sources && (
                            <div>
                              <span style={{ fontWeight: '500', color: '#6b7280' }}>Sources:</span>
                              {evaluation.sources.map((source, idx) => (
                                <a key={idx} href={source} target="_blank" rel="noopener noreferrer" 
                                   style={{ margin: '0 0.5rem', color: '#3b82f6', fontSize: '0.875rem' }}>
                                  {formatUrl(source)}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <p>No detailed evaluations available.</p>
                    )}
                  </OverviewSection>
                </div>
              )}

              {activeTab === 'sources' && (
                <div>
                  <OverviewSection>
                    <h3>All Sources Consulted ({analysisData.sources?.length || 0})</h3>
                    <SourcesGrid>
                      {analysisData.sources ? (
                        analysisData.sources.map((source, index) => (
                          <SourceItem key={index}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                              <h4 title={source.name}>
                                {source.name.length > 50 ? `${source.name.substring(0, 50)}...` : source.name}
                              </h4>
                              <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{source.type}</span>
                            </div>
                            {source.url ? (
                              <a 
                                href={source.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title={`Open: ${source.url}`}
                                onClick={() => console.log('Opening URL:', source.url)}
                              >
                                View Source →
                              </a>
                            ) : (
                              <span style={{ color: '#9ca3af', fontSize: '0.75rem', fontStyle: 'italic' }}>
                                Internal Analysis
                              </span>
                            )}
                          </SourceItem>
                        ))
                      ) : (
                        <p>No sources available.</p>
                      )}
                    </SourcesGrid>
                  </OverviewSection>
                </div>
              )}

              {activeTab === 'metrics' && (
                <div>
                  <MetricsGrid>
                    <MetricGroup>
                      <h3>Prosody Analysis</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {analysisData.prosody?.sarcasm_probability !== undefined && (
                          <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                              <span>Sarcasm Probability:</span>
                              <span>{Math.round(analysisData.prosody.sarcasm_probability * 100)}%</span>
                            </div>
                            <MetricBar>
                              <MetricFill width={analysisData.prosody.sarcasm_probability * 100} />
                            </MetricBar>
                          </div>
                        )}
                        
                        {analysisData.prosody?.speaking_rate && (
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Speaking Rate:</span>
                            <span>{analysisData.prosody.speaking_rate.toFixed(2)} words/sec</span>
                          </div>
                        )}
                        
                        {analysisData.prosody?.tempo && (
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Tempo:</span>
                            <span>{analysisData.prosody.tempo} BPM</span>
                          </div>
                        )}

                        {!analysisData.prosody && (
                          <p>No prosody analysis available.</p>
                        )}
                      </div>
                    </MetricGroup>

                    <MetricGroup>
                      <h3>Credibility Metrics</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {analysisData.credibility_metrics ? (
                          Object.entries(analysisData.credibility_metrics).map(([key, value]) => {
                            if (typeof value === 'number') {
                              return (
                                <div key={key}>
                                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span>{key.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}:</span>
                                    <span>{Math.round(value * 100)}%</span>
                                  </div>
                                  <MetricBar>
                                    <MetricFill width={value * 100} />
                                  </MetricBar>
                                </div>
                              );
                            }
                            return null;
                          })
                        ) : (
                          <p>No credibility metrics available.</p>
                        )}
                        
                        {analysisData.credibility_metrics?.flags && (
                          <div style={{ marginTop: '1rem' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>Flags Detected</h4>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                              {analysisData.credibility_metrics.flags.map((flag, index) => (
                                <span key={index} style={{ 
                                  backgroundColor: '#fee2e2', 
                                  color: '#dc2626', 
                                  padding: '0.25rem 0.75rem', 
                                  borderRadius: '12px', 
                                  fontSize: '0.75rem',
                                  fontWeight: '600'
                                }}>
                                  {flag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </MetricGroup>
                  </MetricsGrid>
                </div>
              )}
            </TabContent>
          </DetailedAnalysisWrapper>

          {/* Action Buttons */}
          <ActionButtons>
            <SecondaryButton>Share Results</SecondaryButton>
            <PrimaryButton onClick={handleNewAnalysis}>
              Analyze Another
            </PrimaryButton>
          </ActionButtons>
        </div>
        <div>
          <VerticalStripe className="right"> </VerticalStripe>
        </div>
      </ResultsWrapper>
    </>
  );
}

export default ResultsPage;
