import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
  const [claimData, setClaimData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Get analysis results from Redux store
  const { analysisResults } = useSelector((state) => state.upload);
  
  // Check for claim data from URL parameters
  useEffect(() => {
    const dataParam = searchParams.get('data');
    console.log('URL data param:', dataParam);
    if (dataParam) {
      try {
        // Try parsing directly first, then with decodeURIComponent if that fails
        let parsedData;
        try {
          parsedData = JSON.parse(dataParam);
        } catch {
          parsedData = JSON.parse(decodeURIComponent(dataParam));
        }
        console.log('Parsed claim data:', parsedData);
        setClaimData(parsedData);
      } catch (error) {
        console.error('Error parsing claim data:', error);
      }
    }
  }, [searchParams]);

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

  // Use claim data from URL, Redux results, or fall back to sample data
  console.log('claimData state:', claimData);
  console.log('analysisResults from Redux:', analysisResults);
  
  const analysisData = claimData ? {
    // Transform claim data to match analysis format
    transcription: claimData.claim_text,
    claim: claimData.title,
    verdict: claimData.verdict,
    confidence: claimData.confidence,
    explanation: claimData.explanation,
    evidence_summary: claimData.evidence_summary,
    source_type: claimData.source_type,
    source_url: claimData.source_url,
    trending_score: claimData.trending_score,
    controversy_level: claimData.controversy_level,
    view_count: claimData.view_count,
    share_count: claimData.share_count,
    processing_time: claimData.processing_time,
    discovered_at: claimData.discovered_at,
    processed_at: claimData.processed_at,
    tags: claimData.tags,
    keywords: claimData.keywords,
    related_entities: claimData.related_entities,
    category: claimData.category,
    sources: claimData.sources?.map(source => ({
      name: source.name || 'Unknown Source',
      url: source.url,
      type: source.type || 'web',
      author: source.author,
      published_at: source.published_at,
      reliability: source.reliability
    })) || [],
    claim_evaluations: {
      claim_1: {
        status: claimData.verdict,
        evidence: claimData.explanation,
        evidence_summary: claimData.evidence_summary,
        sources: claimData.sources?.map(s => s.url) || []
      }
    },
    // Remove audio metrics for text-based claims
    isTextClaim: true,
    credibility_metrics: {
      factual_accuracy: claimData.confidence || 0.5,
      source_reliability: claimData.sources?.[0]?.reliability || 0.8,
      controversy_level: claimData.controversy_level || 0.5,
      processing_quality: claimData.processing_time ? Math.min(1.0, 30 / claimData.processing_time) : 0.8,
      flags: claimData.verdict === 'False' ? ['Misinformation detected'] : 
             claimData.verdict === 'Mixed' ? ['Mixed evidence found'] : []
    }
  } : (analysisResults || sampleData);

  const getVerdictColor = (verdict) => {
    switch(verdict?.toLowerCase()) {
      case 'true': return '#10b981';
      case 'false': return '#ef4444'; 
      case 'mixed': return '#f59e0b';
      case 'uncertain': return '#6b7280';
      default: return '#6b7280';
    }
  };

  const getSourceTypeColor = (type) => {
    switch(type) {
      case 'news': return '#6b7280';
      case 'reddit': return '#ff4500';
      case 'grok': return '#1da1f2';
      case 'fact_check_source': return '#22c55e';
      default: return '#6b7280';
    }
  };

  const getSourceTypeLabel = (type) => {
    switch(type) {
      case 'news': return 'News';
      case 'reddit': return 'Reddit';
      case 'grok': return 'Social Media';
      case 'fact_check_source': return 'Fact-Check';
      default: return 'Source';
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
              {!analysisData.isTextClaim && (
                <TabButton 
                  active={activeTab === 'metrics'}
                  onClick={() => setActiveTab('metrics')}
                >
                  Audio Metrics
                </TabButton>
              )}
            </TabNavigation>

            <TabContent>
              {activeTab === 'overview' && (
                <div>
                  <OverviewSection>
                    <h3>{analysisData.isTextClaim ? 'Claim Text' : 'Transcription'}</h3>
                    <TranscriptionBox>
                      {analysisData.transcription || analysisData.claim_text}
                    </TranscriptionBox>
                  </OverviewSection>
                  
                  <OverviewSection>
                    <h3>Fact-Check Analysis</h3>
                    <p>{analysisData.explanation}</p>
                    {analysisData.evidence_summary && (
                      <div style={{ marginTop: '1rem' }}>
                        <h4>Evidence Summary</h4>
                        <p>{analysisData.evidence_summary}</p>
                      </div>
                    )}
                  </OverviewSection>

                  {analysisData.isTextClaim && (
                    <>
                      {analysisData.tags && (
                        <OverviewSection>
                          <h3>Tags</h3>
                          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {analysisData.tags.map((tag, index) => (
                              <span key={index} style={{ 
                                background: '#f3f4f6', 
                                padding: '0.25rem 0.5rem', 
                                borderRadius: '0.25rem',
                                fontSize: '0.875rem'
                              }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </OverviewSection>
                      )}

                      {analysisData.related_entities && (
                        <OverviewSection>
                          <h3>Related Entities</h3>
                          <p>{analysisData.related_entities.join(', ')}</p>
                        </OverviewSection>
                      )}

                      <OverviewSection>
                        <h3>Discovery Information</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                          <div>
                            <strong>Source Type:</strong> {analysisData.source_type || 'Unknown'}
                          </div>
                          <div>
                            <strong>Category:</strong> {analysisData.category}
                          </div>
                          <div>
                            <strong>Trending Score:</strong> {analysisData.trending_score ? `${Math.round(analysisData.trending_score * 100)}%` : 'N/A'}
                          </div>
                          <div>
                            <strong>Views:</strong> {analysisData.view_count || 0}
                          </div>
                          <div>
                            <strong>Shares:</strong> {analysisData.share_count || 0}
                          </div>
                          {analysisData.processing_time && (
                            <div>
                              <strong>Processing Time:</strong> {analysisData.processing_time.toFixed(2)}s
                            </div>
                          )}
                        </div>
                      </OverviewSection>
                    </>
                  )}
                </div>
              )}

              {activeTab === 'claims' && (
                <div>
                  <OverviewSection>
                    <h3>Primary Claims Identified</h3>
                    <ClaimsGrid>
                      {analysisData.isTextClaim ? (
                        // For trending claims, show the main claim
                        <ClaimItem>
                          <ClaimStatus status={analysisData.verdict?.toLowerCase()}>
                            {analysisData.verdict}
                          </ClaimStatus>
                          <p>{analysisData.claim || analysisData.transcription}</p>
                        </ClaimItem>
                      ) : (
                        // For audio analysis, use original logic
                        analysisData.evidence?.primary_claims?.map((claim, index) => (
                          <ClaimItem key={index}>
                            <ClaimStatus status="false">False</ClaimStatus>
                            <p>{claim}</p>
                          </ClaimItem>
                        )) || <p>No primary claims identified.</p>
                      )}
                    </ClaimsGrid>
                  </OverviewSection>

                  <OverviewSection>
                    <h3>Detailed Evaluations</h3>
                    {analysisData.isTextClaim ? (
                      // For trending claims, show the fact-check evaluation
                      <div style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                          <ClaimStatus status={analysisData.verdict?.toLowerCase()}>
                            {analysisData.verdict}
                          </ClaimStatus>
                          <h4>FACT-CHECK ANALYSIS</h4>
                          {analysisData.confidence && (
                            <span style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.875rem' }}>
                              {Math.round(analysisData.confidence * 100)}% Confidence
                            </span>
                          )}
                        </div>
                        <p style={{ marginBottom: '1rem', color: '#4b5563' }}>
                          {analysisData.explanation}
                        </p>
                        {analysisData.evidence_summary && (
                          <div style={{ marginBottom: '1rem', padding: '0.75rem', background: '#f9fafb', borderRadius: '6px' }}>
                            <span style={{ fontWeight: '500', color: '#374151' }}>Evidence Summary:</span>
                            <p style={{ margin: '0.5rem 0 0 0', color: '#6b7280' }}>{analysisData.evidence_summary}</p>
                          </div>
                        )}
                        {analysisData.source_url && (
                          <div>
                            <span style={{ fontWeight: '500', color: '#6b7280' }}>Original Source:</span>
                            <a href={analysisData.source_url} target="_blank" rel="noopener noreferrer" 
                               style={{ margin: '0 0.5rem', color: '#3b82f6', fontSize: '0.875rem' }}>
                              {formatUrl(analysisData.source_url)}
                            </a>
                          </div>
                        )}
                        {analysisData.keywords && (
                          <div style={{ marginTop: '1rem' }}>
                            <span style={{ fontWeight: '500', color: '#6b7280' }}>Keywords:</span>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                              {analysisData.keywords.map((keyword, idx) => (
                                <span key={idx} style={{ 
                                  background: '#dbeafe', 
                                  color: '#1e40af',
                                  padding: '0.25rem 0.5rem', 
                                  borderRadius: '0.25rem',
                                  fontSize: '0.875rem'
                                }}>
                                  {keyword}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      // For audio analysis, use original logic
                      analysisData.evidence?.claim_evaluations ? (
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
                      )
                    )}
                  </OverviewSection>
                </div>
              )}

              {activeTab === 'sources' && (
                <div>
                  {/* Separate sources by type */}
                  {(() => {
                    const factCheckSources = analysisData.sources?.filter(s => s.type === 'fact_check_source') || [];
                    const originalSources = analysisData.sources?.filter(s => s.type !== 'fact_check_source') || [];
                    const totalSources = (analysisData.sources?.length || 0);

                    return (
                      <>
                        {/* PRIMARY: Fact-checking sources */}
                        {factCheckSources.length > 0 && (
                          <OverviewSection>
                            <h3>🔍 Verified By ({factCheckSources.length})</h3>
                            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                              These sources were used to verify the claim's accuracy
                            </p>
                            <SourcesGrid>
                              {factCheckSources.map((source, index) => (
                                <SourceItem key={index} style={{ 
                                  border: '2px solid #22c55e', 
                                  background: '#f0fdf4',
                                  fontWeight: '600'
                                }}>
                                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <h4 title={source.name} style={{ margin: 0, color: '#166534' }}>
                                      {source.name.length > 40 ? `${source.name.substring(0, 40)}...` : source.name}
                                    </h4>
                                    {source.reliability && source.reliability > 0.9 && (
                                      <span style={{ 
                                        background: '#22c55e', 
                                        color: 'white', 
                                        padding: '0.125rem 0.5rem', 
                                        borderRadius: '0.25rem', 
                                        fontSize: '0.75rem' 
                                      }}>
                                        Highly Reliable
                                      </span>
                                    )}
                                    {source.reliability && source.reliability > 0.7 && source.reliability <= 0.9 && (
                                      <span style={{ 
                                        background: '#eab308', 
                                        color: 'white', 
                                        padding: '0.125rem 0.5rem', 
                                        borderRadius: '0.25rem', 
                                        fontSize: '0.75rem' 
                                      }}>
                                        Reliable
                                      </span>
                                    )}
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
                              ))}
                            </SourcesGrid>
                          </OverviewSection>
                        )}

                        {/* SECONDARY: Original article source */}
                        {originalSources.length > 0 && (
                          <OverviewSection>
                            <h3>📰 Original Article ({originalSources.length})</h3>
                            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                              Where this claim was first reported
                            </p>
                            <SourcesGrid>
                              {originalSources.map((source, index) => (
                                <SourceItem key={index} style={{ 
                                  border: '1px solid #6b7280', 
                                  background: '#f9fafb',
                                  fontStyle: 'italic'
                                }}>
                                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <h4 title={source.name} style={{ margin: 0, color: '#374151' }}>
                                      {source.name.length > 40 ? `${source.name.substring(0, 40)}...` : source.name}
                                    </h4>
                                    <span style={{ 
                                      background: getSourceTypeColor(source.type), 
                                      color: 'white', 
                                      padding: '0.125rem 0.5rem', 
                                      borderRadius: '0.25rem', 
                                      fontSize: '0.75rem' 
                                    }}>
                                      {getSourceTypeLabel(source.type)}
                                    </span>
                                  </div>
                                  {source.author && (
                                    <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0.25rem 0' }}>
                                      By {source.author}
                                    </p>
                                  )}
                                  {source.published_at && (
                                    <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0.25rem 0' }}>
                                      Published {new Date(source.published_at).toLocaleDateString()}
                                    </p>
                                  )}
                                  {source.url ? (
                                    <a 
                                      href={source.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      style={{ color: '#3b82f6', fontWeight: '500' }}
                                    >
                                      View Source →
                                    </a>
                                  ) : (
                                    <span style={{ color: '#9ca3af', fontSize: '0.75rem', fontStyle: 'italic' }}>
                                      No URL available
                                    </span>
                                  )}
                                </SourceItem>
                              ))}
                            </SourcesGrid>
                          </OverviewSection>
                        )}

                        {/* Empty state */}
                        {factCheckSources.length === 0 && originalSources.length === 0 && (
                          <OverviewSection>
                            <h3>Sources</h3>
                            <p style={{ color: '#6b7280', fontStyle: 'italic' }}>No sources available for this claim.</p>
                          </OverviewSection>
                        )}
                      </>
                    );
                  })()}
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
