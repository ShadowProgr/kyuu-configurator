$(document).ready(function(){

    $("input[name='layout-case']").change(function() {
        const id = $("input[type='radio'][name='layout-case']:checked").attr("id");

        if (id.startsWith("case-alu")) {
            $(".case-color").show();
            $(".case-alu-color").show();
            $(".case-pc-color").hide();
        } else if (id.startsWith("case-pc")) {
            $(".case-color").show();
            $(".case-alu-color").hide();
            $(".case-pc-color").show();
        } else {
            $(".case-color").hide();
        }
        
        if (id.includes("crane")) {
            $(".badge-regular").hide();
            $(".badge-crane").hide();
            $(".badge-flower").show();
        } else if (id.includes("flower")) {
            $(".badge-regular").hide();
            $(".badge-crane").hide();
            $(".badge-flower").show();
        } else {
            $(".badge-regular").show();
            $(".badge-crane").hide();
            $(".badge-flower").hide();
        }
    });

    $("input[name='badge-material']").change(function() {
        const id = $("input[type='radio'][name='badge-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".badge-color").show();
            $(".badge-alu-color").show();
            $(".badge-pc-color").hide();
        } else if (id.includes("pc")) {
            $(".badge-color").show();
            $(".badge-alu-color").hide();
            $(".badge-pc-color").show();
        } else {
            $(".badge-color").hide();
        }
    });

    $("input[name='weight-style']").change(function() {
        const id = $("input[type='radio'][name='weight-style']:checked").attr("id");

        if (id.includes("regular")) {
            $(".subweight-material").hide();
            $(".subweight-color").hide();
        } else {
            $(".subweight-material").show();
            $(".subweight-color").show();
        }
    });

    $("input[name='weight-material'").change(function() {
        const id = $("input[type='radio'][name='weight-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".weight-color").show();
        } else {
            $(".weight-color").hide();
        }
    });

    $("input[name='subweight-material'").change(function() {
        const id = $("input[type='radio'][name='subweight-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".subweight-color").show();
        } else {
            $(".subweight-color").hide();
        }
    });

    $("input[name='plate-material'").change(function() {
        const id = $("input[type='radio'][name='plate-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".plate-color").show();
            $(".plate-alu-color").show();
            $(".plate-pc-color").hide();
            $(".plate-pom-color").hide();
        } else if (id.includes("pc")) {
            $(".plate-color").show();
            $(".plate-alu-color").hide();
            $(".plate-pc-color").show();
            $(".plate-pom-color").hide();
        } else if (id.includes("pom")) {
            $(".plate-color").show();
            $(".plate-alu-color").hide();
            $(".plate-pc-color").hide();
            $(".plate-pom-color").show();
        } else {
            $(".plate-color").hide();
        }
    });

    $("input[name='layout-case'][id='case-alu-wk']").prop("checked", true);
    $("input[name='case-color'][id='case-alu-eblack']").prop("checked", true);
    $("input[name='badge-material'][id='badge-alu']").prop("checked", true);
    $("input[name='badge-color'][id='badge-alu-ewhite']").prop("checked", true);
    $("input[name='weight-style'][id='weight-hybrid']").prop("checked", true);
    $("input[name='weight-material'][id='weight-alu']").prop("checked", true);
    $("input[name='weight-color'][id='weight-alu-ewhite']").prop("checked", true);
    $("input[name='subweight-color'][id='subweight-alu-eblack']").prop("checked", true);
    $("input[name='plate-material'][id='plate-alu']").prop("checked", true);
    $("input[name='plate-color'][id='plate-alu-ewhite']").prop("checked", true);
});