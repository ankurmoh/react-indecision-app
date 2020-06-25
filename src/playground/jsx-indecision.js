const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options : []
}

const onFromSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        render()
    }
}

const onRemoveAll = () => {
    app.options = []
    render()
}

const appRoot = document.getElementById('app');

const numbers = [1,2,3,4,5]

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const render = () => {
    const template = 
<div>
    <h1> {app.title} </h1>
     {app.subtitle && <p>{app.subtitle}</p> } 
     <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
     <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
     <button onClick = {onRemoveAll}>Remove All</button>
     {
        //[<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>, <p key="4">d</p>]
        numbers.map((number) => {
            return <p key={number}>Number : {number}</p>
        })
     }
    <ol>
        {
            app.options.map((option) => {
            return <li key={option}>Option: {option}</li>
        })
        }
    </ol>
    <form onSubmit = {onFromSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
    </form>
</div>;

ReactDOM.render(template, appRoot)

}

render()
