function showTab(tabId) {
    document.querySelectorAll('.content').forEach(c => c.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}
