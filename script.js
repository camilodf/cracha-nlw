const socialMediaLinks = {
  github: 'camilodf',
  youtube: 'UCPQP_6H9ZaiEH9dAAGdvTCA',
  facebook: 'camilo.dalcim',
  instagram: 'camilodf10',
  twitter: 'cfranzini10'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPicture.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
