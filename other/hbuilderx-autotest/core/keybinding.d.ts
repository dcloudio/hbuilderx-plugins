/**
 * insertLineAfter
 * closeActiveEditor
 */
interface KeyBindings {
    insertLineAfter: string;
    gotoDefinition: string;
    closeActiveEditor: string;
    showPubMenu: string;
    closeAllEditor: string;
    undo: string;
    copy: string;
    cut: string;
    paste: string;
    save: string;
    run: string;
    delLine: string;
    selectAll: string;
    clipBoardHistory: string;
    newUnTitledEditor: string;
    'editor.action.triggerSuggest': string;
    enter: string;
    down: string;
    esc: string;
    openAndCloseOutline: string;
    findReferences: string;
    focusProjectManager: string;
}
declare let keyBindings: KeyBindings;
export { keyBindings };
