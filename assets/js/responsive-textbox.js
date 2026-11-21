export function initChatInput() {
    const textarea = document.getElementById('chat-input');
    const form = document.getElementById('input-form');

    if (!textarea) return;

    const maxHeight = 160;

    const resizeTextarea = () => {
        textarea.style.height = 'auto';
        const nextHeight = Math.min(textarea.scrollHeight, maxHeight);
        textarea.style.height = `${nextHeight}px`;
        textarea.style.overflowY = textarea.scrollHeight > maxHeight ? 'auto' : 'hidden';
    };

    resizeTextarea();

    textarea.addEventListener('input', resizeTextarea);

    if(form){
        form.addEventListener('reset', () => {
            requestAnimationFrame(resizeTextarea);
        });
    }
}