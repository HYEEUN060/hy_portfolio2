$(function() {
    let index = 0; // 몇 번째 .show를 나타낼지 저장하는 변수

    $('.me-main img').click(function() {
        const $shows = $(this).siblings('.show'); // 해당 이미지의 형제인 .show 요소들

        // 아직 안 나온 .show 요소가 있으면 순서대로 하나씩 나타나게 함
        if (index < $shows.length) {
            $shows.eq(index).show();
            index++; // 다음 번에는 그 다음 .show가 나타나도록 index 증가
        }
    });
});
