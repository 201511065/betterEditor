import {EditorView} from './views/editor.view.mjs'
import {EditorController} from "./controllers/editor.controller.mjs";
import {EditorService} from "./services/editor.service.mjs";

new EditorController(new EditorService(), new EditorView());
