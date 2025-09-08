
document.getElementById('theme-select').addEventListener('change', function() {
    document.body.setAttribute('data-theme', this.value);
});