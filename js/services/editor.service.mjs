import {DocumentModel} from "../models/document.model.mjs";

export class EditorService {
  constructor() {
    const ts = JSON.parse(localStorage.getItem('text')) || [];
    this.model = new DocumentModel(ts);

  }

  // 로컬스토리지에 저장
  _commit(model) {
    localStorage.setItem("text", JSON.stringify(model));

  }

  // 모델에 저장
  addTextToModel(ts) {
    this.model = ts;

    this._commit(this.model);
  }

  // 로컬스토리지에 저장된 text 가져오기
  getStorageText() {
    return JSON.parse(localStorage.getItem('text'));
  }

  // 모델에 저장된 text 가져오기
  getModelText() {
    return this.model.text;
  }

}
