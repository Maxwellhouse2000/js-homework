// API

// fetch

const links = document.querySelectorAll('.nav__list-link')
const tabs = document.querySelectorAll('.section')
const usersCards1 = document.querySelector('.users__cards')
links.forEach(link => {
	const linkAttr = link.getAttribute('data-tab')
	link.addEventListener('click', e => {
		e.preventDefault()
		tabs.forEach(tab => {
			const tabAttr = tab.getAttribute('data-tab')
			if (linkAttr == tabAttr) {
				tab.classList.add('active')
			} else {
				tab.classList.remove('active')
			}
		})
	})
	usersCards1.addEventListener('click', e => {
		e.preventDefault()
		tabs.forEach(tab => {
			const tabAttr = tab.getAttribute('data-tab')
			if (linkAttr == tabAttr) {
				tab.classList.add('active')
			} else {
				tab.classList.remove('active')
			}
		})
	})
})

const usersCards = document.querySelector('.users__cards')
async function getUsers() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		const data = await response.json()

		data.forEach(user => {
			const item = document.createElement('div')
			item.setAttribute('data-user-id', user.id)
			item.classList.add('user__card')

			item.innerHTML = `
<p class="users__card-name">
${user.name}
<span>${user.id}</span>
<p class="users__card-name">
Email:
<span>${user.email}</span>
<p class="users__card-name">



</p>
<p class="users__cardname">
${user.username}

</p>
`

			usersCards.append(item)
		})
	} catch (error) {
		console.error(error)
	}
}
getUsers()

const usersComments = document.querySelector('.users__comments')
async function getComments() {
	try {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/comments'
		)
		const data = await response.json()

		data.forEach(user => {
			const item = document.createElement('div')
			item.classList.add('user__comment')
			item.innerHTML = `
<p class="users__comments-name">
${user.name}
<span>${user.id}</span>
<p class="users__comments-name">
${user.email}
<p class="users__comments-name">
${user.body}


`

			usersComments.append(item)
		})
	} catch {
		console.error(error)
	}
}
getComments()

const usersTodos = document.querySelector('.users__todos')
async function getTodos() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos')
		const data = await response.json()

		data.forEach(user => {
			const item = document.createElement('div')
			item.classList.add('user__todo')
			item.innerHTML = `
<p class="users__todos-name">
${user.id}
<p class="users__todos-name">
${user.title}
<p class="users__todos-name">
${user.completed}
<p class="users__todos-name">
${user.userId}



`

			usersTodos.append(item)
		})
	} catch {
		console.error(error)
	}
}
getTodos()

async function getTodosByUser(userId) {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/todos?userId=${userId}`
		)
		const data = await response.json()

		usersTodos.innerHTML = ''

		data.forEach(todo => {
			const item = document.createElement('div')

			item.classList.add('user__todo')

			item.innerHTML = `
<p class="users__todos-name">

${todo.id}

<p class="users__todos-name">

${todo.title}

<p class="users__todos-name">

${todo.completed}

<p class="users__todos-name">

${todo.userId}



`

			usersTodos.append(item)
		})
	} catch {
		console.error(error)
	}
}

usersCards.addEventListener('click', e => {
	const target = e.target.closest('.user__card')
	if (target) {
		const userId = target.getAttribute('data-user-id')
		getTodosByUser(userId)
	}
})
