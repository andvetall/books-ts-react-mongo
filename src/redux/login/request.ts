export default function request( method: string, body?: object) {
    return (fetch('http://localhost:3200/v1/auth', {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }).then(response => response.json())
    );
}