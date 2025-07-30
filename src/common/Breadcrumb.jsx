import { BreadcrumbWrapper, BreadcrumbStage, BreadcrumbLine, StageWrapper } from './Breadcrumb.styled';
import { useDispatch, useSelector } from 'react-redux';

const Breadcrumb = () => {
    const { file, fileName, isUploaded, truthRevealed, isAnalysed } = useSelector((state) => state.upload);

    return(
        <>  
          <BreadcrumbWrapper>
            <StageWrapper>
                <BreadcrumbStage enable={isUploaded}>{ isUploaded ? `uploaded` : `upload`}</BreadcrumbStage>
                <BreadcrumbLine path={true}> </BreadcrumbLine>
            </StageWrapper>
             <StageWrapper>
                <BreadcrumbStage enable={isAnalysed}>Analyse</BreadcrumbStage>
                <BreadcrumbLine path={true}> </BreadcrumbLine>
            </StageWrapper>           
            <StageWrapper>
                <BreadcrumbStage enable={truthRevealed}>Results</BreadcrumbStage>
                <BreadcrumbLine path={false}> </BreadcrumbLine>
            </StageWrapper>
          </BreadcrumbWrapper>
        </>

    );
};

export default Breadcrumb;