export function isClientSide(): boolean {
    try {
        let x = document;
        return true;
    } catch (e) {
        return false;
    }
}