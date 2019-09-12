export default function request( method: string, url?: string, body?: object) {
    return (fetch(`http://localhost:3200/v1/${url}`, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }).then(response => response.json())
    );
}