import { 
  AboutWrapper,
  VerticalStripe,
  AboutContainer, 
  HeroSection,
  HeroTitle,
  ContentSection,
  ContentGrid,
  ContentBlock,
  FoundersSection,
  SectionTitle,
  FoundersGrid,
  FounderCard, 
  FounderImageContainer,
  FounderImage, 
  FounderInfo, 
  FounderName, 
  FounderTitle,
  FounderBio
} from './AboutPage.styled';

// Import founder images
import yeshwanthImage from '../assets/images/ys.jpeg';
import pranithImage from '../assets/images/pm.jpeg';

function AboutPage() {
  return (
    <AboutWrapper>
      <VerticalStripe className="left" />
      <AboutContainer>
        <HeroSection>
          <HeroTitle>
            We started with a question: can sound be trusted? That quest created audio verification and today’s groundbreaking fact-checking platform.
          </HeroTitle>
        </HeroSection>
        
        <ContentSection>
          <ContentGrid>
            <ContentBlock>
              <p>
                We kick-started operations with the goal of breaking all barriers that 
                users face in terms of misinformation, cost, and accessibility. We named 
                the platform Audio Debunker, combining our mission to debunk false claims 
                with cutting-edge audio analysis technology.
              </p>
              <p>
                Today, our advanced AI models and comprehensive fact-checking algorithms 
                have made us a trusted platform for audio content verification and 
                misinformation detection.
              </p>
              <p>
                Our platform processes thousands of audio files and claims, helping users 
                identify authentic content and combat the spread of misinformation through 
                our powerful verification ecosystem.
              </p>
            </ContentBlock>
            
            <ContentBlock>
              <p>
                Our mission extends beyond just technology - we aim to create a more 
                informed society where truth prevails over misinformation.
              </p>
              <p>
                And yet, we are always up to something new every day. Catch up on the 
                latest updates on our platform or learn more about our technology and 
                methodologies.
              </p>
            </ContentBlock>
          </ContentGrid>
        </ContentSection>
        
        <FoundersSection>
          <SectionTitle>Founders</SectionTitle>
          <FoundersGrid>
            <FounderCard>
              <FounderImageContainer>
                <FounderImage src={yeshwanthImage} alt="Yeshwanth Soma" />
              </FounderImageContainer>
              <FounderInfo>
                <FounderName>Yeshwanth Soma</FounderName>
                <FounderTitle>Staff Software Engineer</FounderTitle>
                <FounderBio>
                  Yeshwanth’s journey began with a passion for using technology to solve complex, real-world problems. His drive to build tools that simplify trust and transparency led him to co-found the platform, turning audio verification into a powerful fact-checking solution. Today, he continues to shape the product vision and strategy.
                </FounderBio>
              </FounderInfo>
            </FounderCard>
            
            <FounderCard>
              <FounderImageContainer>
                <FounderImage src={pranithImage} alt="Pranith Modem" />
              </FounderImageContainer>
              <FounderInfo>
                <FounderName>Pranith Modem</FounderName>
                <FounderTitle>Software Engineer II</FounderTitle>
                <FounderBio>
                  Pranith co-founded this platform after realizing how hard it is to trust what we hear in a world of misinformation. With a background in software engineering, he helped pioneer audio verification as the first step toward solving that challenge. Today, he is focused on scaling fact-checking technology that makes truth easier to access.
                </FounderBio>
              </FounderInfo>
            </FounderCard>
          </FoundersGrid>
        </FoundersSection>
      </AboutContainer>
      <VerticalStripe className="right" />
    </AboutWrapper>
  );
}

export default AboutPage;