$(function(){
    // 카테고리 항목을 클릭했을 때
    $('.category li').click(function(){
        let idx = $(this).index();

        // 모든 tabitem 숨기고, 클릭한 인덱스의 tabitem만 표시
        $('.tabitem').hide();
        $('.tabitem').eq(idx).show();

        // 하이드워크 안에 있는 탭아이템들에서 on 클래스를 모두 제거하고
        $('.hide-works').removeClass('on');

        // 클릭한 인덱스의 tabitem에 모에게 on 클래스 추가
        // 이게 왜 되지???????????ㄱㅇㄷ
        $('.hide-works .tabitem').parent().eq(idx).addClass('on');
    });

    // 첫 번째 li를 자동으로 클릭 이벤트 발생시키기
    $('.category li').eq(0).trigger('click');
});
