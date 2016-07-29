function getDutyList(userId) {
    $.ajax({
        url : "./list/duty/"+userId,
            type : "POST",
            dataType : "json",
            success : function(data, textStatus, jqXHR) {
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        $("#dutyList").append(
                        '<li class="mt-list-item done">'+
                        '    <div class="list-icon-container">'+
                        '        <i class="icon-check"></i>'+
                        '    </div>'+
                        '    <div class="list-datetime"> 8 Nov </div>'+
                        '    <div class="list-item-content">'+
                        '        <h3 class="uppercase">'+
                        '            <a href="javascript:;">' + data[i].name + '</a>'+
                        '        </h3>'+
                        '    </div>'+
                        '</li>'
                        );
                    }
                }
            },
            error : function(jqXHR, textStatus, errorThrown) {
                console.error("Error getting duty list");
            }
    });
}