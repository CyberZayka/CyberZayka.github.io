
const tabLink = document.querySelectorAll('.tab-link');

for (let itemTab of tabLink) {
    itemTab.addEventListener('click', function (event) {
        const dataTab = event.target.getAttribute('data-tab');
        const dataTriangle = event.target.getAttribute('data-triangle');
        const tabContent = document.getElementsByClassName('tab-content');
        const triangle = document.getElementsByClassName('triangle');

        for (let i = 0; i < tabContent.length; i++) {

            if (i == dataTab) {
                tabContent[i].style.display = 'flex';
            } else {
                tabContent[i].style.display = 'none';
            }
        }

        for (let j = 0; j < tabLink.length; j++) {
            tabLink[j].className = tabLink[j].className.replace(" tab-active", "");
        }
        event.currentTarget.className += " tab-active";

        for (let k = 0; k < triangle.length; k++) {
            if (k == dataTriangle) {
                triangle[k].style.display = 'block';
            } else {
                triangle[k].style.display = 'none';
            }
        }

    });
}

const smallPictures = document.querySelectorAll('.small-pictures');
const prevBtn = document.querySelector('.first-square');
const nextBtn = document.querySelector('.second-square');

const workersWrapElem = document.getElementsByClassName('workers-wrapper__elem');

for (let itemPct of smallPictures) {

    itemPct.addEventListener('click', function (event) {

        const dataPct = itemPct.getAttribute('data-pct');

        for (let i = 0; i < workersWrapElem.length; i++) {
            if (i == dataPct) {
                workersWrapElem[i].style.display = 'flex';
            } else {
                workersWrapElem[i].style.display = 'none';
            }
        }
    });

}

let e = 0;
nextBtn.addEventListener('click',function () {

    workersWrapElem[e].style.display = 'none';
    e++;

    if (e === workersWrapElem.length) {
        e = 0;
    }

    workersWrapElem[e].style.display = 'flex';

});

prevBtn.addEventListener('click', function () {

    workersWrapElem[e].style.display = 'none';
    e--;

    if (e < 0) {
        e = workersWrapElem.length - 1;
    }

    workersWrapElem[e].style.display = 'flex';

});

const tabLinkTwo = document.querySelectorAll('.tab-link-two');
const gridBox = document.getElementsByClassName('grid-box');

for (let itemTabTwo of tabLinkTwo) {
    itemTabTwo.addEventListener('click', function (event) {

        const dataTabTwo = itemTabTwo.getAttribute('data-btn');

        for (let i = 0; i < gridBox.length; i++) {

            if (i == dataTabTwo) {
                gridBox[i].style.display = 'block';
            } else {
                gridBox[i].style.display = 'none';
            }

        }

        for (let j = 0; j < tabLinkTwo.length; j++) {
            tabLinkTwo[j].className = tabLinkTwo[j].className.replace(" active-box", "");
        }
        event.currentTarget.className += " active-box";

    });
}

const loadMore = document.getElementsByClassName('load-more');

for (let itemLoadMore of loadMore) {
    itemLoadMore.addEventListener('click', function (event) {

        const hiddenTab = document.getElementsByClassName('hidden-tab');
        const dataLoadMore = itemLoadMore.getAttribute('data-hidden');

        for (let i = 0; i < hiddenTab.length; i++) {
            const dataHidden = hiddenTab[i].getAttribute('data-hidden');

                if (dataHidden === dataLoadMore) {

                    $(hiddenTab[i]).slideDown();
                    $(itemLoadMore).css('display', 'none');

                }

                for (let j = 0; j < gridBox.length; j++) {

                    const dataGrid = gridBox[j].getAttribute('data-grid');
                    if (dataGrid === dataLoadMore) {
                        gridBox[j].style.height = '1180px';
                    }

                }


        }

    });
}
