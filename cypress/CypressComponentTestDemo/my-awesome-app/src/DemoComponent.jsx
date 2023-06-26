//inside src/DemoComponent.jsx
import { useState } from 'react'
export default function Demo({ greetings = 'Good Morning' }) {
const [greetingMessage] = useState(greetings)

return (
<div>
<div id='message'>
Hello Browserstack! {greetingMessage}
</div>

<div id='date'>
<p>Today's date is: {new Date().toLocaleDateString()}</p>
</div>
</div>
)
}