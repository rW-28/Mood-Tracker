# Mood Tracker & Data Visualization

Web application for daily tracking of emotional state with visualization of dynamics on a graph.

## Idea
The project was created to help users track the relationship between their activity and mood. All data is stored locally, which ensures privacy and quick access to history without the need for a backend.

## Screenshots

### Live Demo

## Technologies Used
- **JavaScript (ES6+)**: The logic of data processing and working with the DOM.
- **Chart.js**: Data Visualization (line graph).
- **HTML5 & CSS3**: Semantic layout and adaptive design.
- **LocalStorage API**: Storing the recording history in the user's browser.

## Functionality
- **Mood Logging**: The ability to add daily notes with a mood assessment and a short comment.
- **Dynamic Charting**: Automatic chart updates when new data is added.
- **Persistence**: The data does not disappear after the page is reloaded due to integration with `localStorage`.
- **Data Management**: The logic of checking existing data (`getItem` before `setItem`) to complement the record array, rather than overwriting it.

## Issues I've encountered
1. **Processing of data arrays**: Converting objects from `localStorage` to a format that understands Chart.js (extracting dates for the X-axis and estimates for the Y-axis).
2. **Conditional save logic**: Verification is implemented: if there is already data in the storage, a new object is added to the existing array; if there is no data, a new array is created.
3. **Scroll & Responsiveness**: Configure the graph container to correctly display a large number of records through scrolling.

## How to use
1. Clone the repository: `git clone https://github.com/your_name/mood-tracker.git`
2. Open `index.html` in your browser.