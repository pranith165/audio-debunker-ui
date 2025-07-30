import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  file: null,
  fileName: '',
  isUploaded: false,
  truthRevealed: false,
  isAnalysed: false
};

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    setFile(state, action) {
      state.file = action.payload.file;
      state.fileName = action.payload.fileName;
    },
    markUploaded(state) {
      state.isUploaded = true;
    },
    resetUpload(state) {
      state.file = null;
      state.fileName = '';
      state.isUploaded = false;
    },
    setResults(state) {
      state.truthRevealed = true;
    },
    setAnalyse(state) {
      state.isAnalysed = true;
    }
  },
});

export const { setFile, markUploaded, resetUpload, setResults, setAnalyse } = uploadSlice.actions;
export default uploadSlice.reducer;
