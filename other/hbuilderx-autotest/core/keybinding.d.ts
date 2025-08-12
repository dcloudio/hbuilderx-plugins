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
    format: string;
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
    findSameWord: string;
    focusProjectManager: string;
}
declare let keyBindings: KeyBindings;
declare function parseAndMatchKeys(hotkeyString: string): string;
export { keyBindings, parseAndMatchKeys };
