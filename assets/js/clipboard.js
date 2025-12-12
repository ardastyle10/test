        async function pasteFromClipboard() {
            try {
                const text = await navigator.clipboard.readText();
                document.getElementById('urlInput').value = text;
            } catch (err) {
                alert("Gagal mengambil teks dari clipboard! Pastikan izin diberikan.");
                console.error(err);
            }
        }
        
        
        
        async function pasteFromClipboardTikTokV2(event) {
        	event?.preventDefault(); // hanya jika event tersedia
            try {
                const text2 = await navigator.clipboard.readText();
                document.getElementById('tiktokUrl').value = text2;
            } catch (err) {
                alert("Gagal mengambil teks dari clipboard! Pastikan izin diberikan.");
                console.error(err);
            }
        }
        
        
        
        async function pasteFromClipboardToolsInstagram() {
            try {
                const text4 = await navigator.clipboard.readText();
                document.getElementById('urlInput').value = text4;
            } catch (err) {
                alert("Gagal mengambil teks dari clipboard! Pastikan izin diberikan.");
                console.error(err);
            }
        }
        
        
        
        async function pasteFromClipboardSoundCloud() {
            try {
                const text3 = await navigator.clipboard.readText();
                document.getElementById('scUrl').value = text3;
            } catch (err) {
                alert("Gagal mengambil teks dari clipboard! Pastikan izin diberikan.");
                console.error(err);
            }
        }
        
        
        
        async function pasteFromClipboardToolsGdrive() {
            try {
                const text5 = await navigator.clipboard.readText();
                document.getElementById('urlInput').value = text5;
            } catch (err) {
                alert("Gagal mengambil teks dari clipboard! Pastikan izin diberikan.");
                console.error(err);
            }
        }