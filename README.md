### Classic arcade games

Current version: '1.1.0'

This is a project I started working on in my own time now that I have finished my university exams to continue my learning
with React.js and web-designed applications. The aim of this is to code some of my favourite simple arcade games from when I
was growing up, and in the future put my own twist or new rules into it. If you're reading this and have any ideas of what
game to do next get in contact with me, would honestly love the inspiration. As a young developer im also keen to help anyone
with any projects they are working on.

### Running the project

to run the project you can clone the repository onto your own device and then 'npm-start' in the classic-games directory. This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Changes in V1.1.0:

- Optimised Tetris and increased the start falling speed of blocks to make the gameplay feel smoother
- Revamped the homepage and created a flex display layout which should hopefully make it easier when scaling up extra pages
  in the future. (Please not mobile support is currently not enabled and the website is meant to be run in a full browser sized
  window.)
- Added font and extra styling to the Tetris page as well as a link back to the homepage for increased usability.

### Bugs I am aware of currently:

- currently score in Tetris sometimes changes to 'NaN' when a new row is completed. Trying to find out why this is. (fixed)
- very rarely a TypeError will occur when creating a new stage based on the player pos in the higher levels. I believe this
  is due to the indices not being officially created yet even though they should be with the original createStage method.
