<script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js"> </script>
if (window.screen.width > 500)
{
    var radius = 200;
} else
{
    var radius = 120;
}
const Texts = [
    'ProblemSolving', 'CS', 'Web',
    'Nassour', 'Coding',
    'Business', 'Moussa',
    'TeamWork', 'Developer', 'Collaboration',
    'Marketing', 'IT', 'Designer', 'Growth'
];

var tagCloud = TagCloud('.Sphere', Texts, {

    // Sphere radius in px
    radius: radius,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'fast',

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true

});