document.addEventListener('DOMContentLoaded', function() {
    let currentPath = '';
    let modal = null;
    
    // Load the file listing data
    loadFileListing().then(fileData => {
        window.fileData = fileData;
        loadDirectory(currentPath);
        createModal();
    }).catch(error => {
        console.error('Error loading file listing:', error);
        document.getElementById('fileList').innerHTML = 
            '<li>Error loading file listing. Please refresh the page.</li>';
    });
    
    // Handle breadcrumb navigation
    document.getElementById('breadcrumb').addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.hasAttribute('data-path')) {
            e.preventDefault();
            currentPath = e.target.getAttribute('data-path');
            loadDirectory(currentPath);
        }
    });
    
    // Handle file list clicks
    document.getElementById('fileList').addEventListener('click', function(e) {
        if (e.target.classList.contains('directory-link')) {
            e.preventDefault();
            const relPath = e.target.getAttribute('data-path');
            currentPath = relPath;
            loadDirectory(currentPath);
        }
        
        if (e.target.classList.contains('thumbnail')) {
            e.preventDefault();
            const imgPath = e.target.getAttribute('data-full-src');
            showFullImage(imgPath);
        }
    });
    
    function createModal() {
        modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.style.display = 'none';
        modal.style.position = 'fixed';
        modal.style.zIndex = '1000';
        modal.style.left = '0';
        modal.style.top = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.cursor = 'zoom-out';
        
        const img = document.createElement('img');
        img.id = 'modalImage';
        img.style.maxWidth = '90%';
        img.style.maxHeight = '90%';
        img.style.objectFit = 'contain';
        
        modal.appendChild(img);
        modal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        document.body.appendChild(modal);
    }
    
    function showFullImage(path) {
        if (!modal) return;
        
        const img = document.getElementById('modalImage');
        img.src = '/votveffects/pub/' + path;
        modal.style.display = 'flex';
    }
    
    function loadFileListing() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'files.js';
            script.onload = () => {
                if (window.FILE_LISTING) {
                    resolve(window.FILE_LISTING);
                } else {
                    reject(new Error('FILE_LISTING not found'));
                }
            };
            script.onerror = () => reject(new Error('Failed to load files.js'));
            document.head.appendChild(script);
        });
    }
    
    function loadDirectory(path) {
    if (!window.fileData) return;
    
    updateBreadcrumb(path);
    
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = '';
    
    const currentFiles = window.fileData.filter(file => {
        const fileDir = file.path.substring(0, file.path.lastIndexOf('/') + 1);
        return fileDir === path;
    });
    
    if (currentFiles.length === 0) {
        const li = document.createElement('li');
        li.textContent = path ? 'This directory is empty.' : 'No files found.';
        fileList.appendChild(li);
        return;
    }
    
    currentFiles.forEach(file => {
        const li = document.createElement('li');
        li.className = 'file-item';
        
        const previewDiv = document.createElement('div');
        previewDiv.className = 'file-preview';
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'file-name';
        
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'file-actions';
        
        if (file.type === 'directory') {
            const link = document.createElement('a');
            link.href = '#';
            link.className = 'directory-link';
            link.setAttribute('data-path', file.path);
            link.textContent = file.name + '/';
            nameDiv.appendChild(link);
        } else {
            // Add thumbnail for image files
            if (/\.(png|jpe?g|gif|webp)$/i.test(file.name)) {
                const thumb = document.createElement('a');
                thumb.href = '#';
                thumb.className = 'thumbnail';
                thumb.setAttribute('data-full-src', file.path);
                
                const thumbImg = document.createElement('img');
                thumbImg.src = '/votveffects/pub/' + file.path;
                thumbImg.style.width = '64px';
                thumbImg.style.height = '64px';
                thumbImg.style.objectFit = 'contain';
                thumbImg.style.marginRight = '10px';
                thumbImg.style.verticalAlign = 'middle';
                thumbImg.style.border = '1px solid #ddd';
                thumbImg.style.borderRadius = '4px';
                
                thumb.appendChild(thumbImg);
                previewDiv.appendChild(thumb);
            }
            // Add audio player for audio files
            else if (/\.(mp3|ogg|wav)$/i.test(file.name)) {
                const icon = document.createElement('div');
                icon.className = 'file-icon audio-icon';
                previewDiv.appendChild(icon);
                
                const playerDiv = document.createElement('div');
                playerDiv.className = 'audio-player';
                
                const audio = document.createElement('audio');
                audio.controls = true;
                audio.src = '/votveffects/pub/' + file.path;
                
                const infoDiv = document.createElement('div');
                infoDiv.className = 'audio-info';
                infoDiv.textContent = file.duration ? formatDuration(file.duration) : '';
                
                playerDiv.appendChild(audio);
                playerDiv.appendChild(infoDiv);
                previewDiv.appendChild(playerDiv);
            }
            
            nameDiv.textContent = file.name;
            
            const downloadLink = document.createElement('a');
            downloadLink.href = '/votveffects/pub/' + file.path;
            downloadLink.textContent = 'Download';
            downloadLink.setAttribute('download', '');
            actionsDiv.appendChild(downloadLink);
            
            if (file.name.match(/\.(txt|md|html?|json|js|css|xml)$/i)) {
                const viewLink = document.createElement('a');
                viewLink.href = '/votveffects/pub/' + file.path;
                viewLink.textContent = 'View';
                viewLink.target = '_blank';
                actionsDiv.appendChild(viewLink);
            }
        }
        
        li.appendChild(previewDiv);
        li.appendChild(nameDiv);
        li.appendChild(actionsDiv);
        fileList.appendChild(li);
    });
}

function formatDuration(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}


    function updateBreadcrumb(path) {
        const breadcrumb = document.getElementById('breadcrumb');
        breadcrumb.innerHTML = '';
        
        const homeLink = document.createElement('a');
        homeLink.href = '#';
        homeLink.setAttribute('data-path', '');
        homeLink.textContent = 'Home';
        breadcrumb.appendChild(homeLink);
        
        if (!path) return;
        
        const parts = path.split('/').filter(p => p);
        let currentPath = '';
        
        parts.forEach(part => {
            breadcrumb.appendChild(document.createTextNode(' / '));
            
            currentPath += part + '/';
            const link = document.createElement('a');
            link.href = '#';
            link.setAttribute('data-path', currentPath);
            link.textContent = part;
            breadcrumb.appendChild(link);
        });
    }
});