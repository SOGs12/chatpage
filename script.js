// start Sidebar
document.queryselector('.chat -sidebar-profile-toggle').addEventlistener('click', function() {
    e.preventDefault()
    this.parentElement.classList.toggle('active')
})

document.addEventlistener('click', function(e) {
    if(!e.target.matches('.chat-sidebar-profile, .chat-sidebar-profile *')) {
        document.queryselector('.chat-sidebar-profile').classList.remove('active')
    }
})
// end: Sidebar