```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct approach: functional update to use the latest state
    setCount(prevCount => prevCount + 1);
  }, []);
  useEffect(() => {
    console.log(count); // Now this logs the correct value
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    </div>
  );
}
```