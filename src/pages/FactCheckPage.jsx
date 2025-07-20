import FileUploader from '../common/FileUploader';
import {FactCheckWrapper, FactCheckUploadWrapper} from './FactCheckPage.styled'

function FactCheckPage() {
  return (
    <FactCheckWrapper>
      <FactCheckUploadWrapper>
        <FileUploader/>
      </FactCheckUploadWrapper>
    </FactCheckWrapper>
  );
}

export default FactCheckPage;
