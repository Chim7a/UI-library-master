import Tooltip from './ui-library/tooltip';
import Dropdown from './ui-library/dropdown';
import Tabs from './ui-library/tabs';
import Snackbar from './ui-library/snackbar';

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create a dropdown
const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});

// create a Tab
const tabs = new Tabs(document.querySelector('.tabs'))
tabs.init()

// create new snackbar
const snackbar = new Snackbar();
snackbar.init()

const button = document.querySelector('button')
button.addEventListener('click', () => {
    snackbar.show('clicked me')
});