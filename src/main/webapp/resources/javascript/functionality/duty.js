function getDutyList(userId) {
    $.ajax({
        url : "./list/duty/"+userId,
            type : "POST",
            dataType : "json",
            success : function(data, textStatus, jqXHR) {
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        $("#dutyList").append('<div class="duty-item"><div class="text-info"><li>' + data[i].name + '</li></div></div>');
                    }
                }
            },
            error : function(jqXHR, textStatus, errorThrown) {
                console.error("Error getting duty list");
            }
    });
}