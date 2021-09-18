$(window).on('load', function () {
    $("input[name='layout-case']").change(function () {
        const id = $("input[type='radio'][name='layout-case']:checked").attr("id");

        if (id.startsWith("case-alu")) {
            $(".case-color").show();
            $(".case-color").animate({ marginLeft: '0px' }, "fast");
            $(".case-alu-color").slideUp("fast", function () {
                $(".case-pc-color").slideDown();
            });
        } else if (id.startsWith("case-pc")) {
            $(".case-color").show();
            $(".case-color").animate({ marginLeft: '0px' }, "fast");
            $(".case-pc-color").slideUp("fast", function () {
                $(".case-alu-color").slideDown();
            });
        } else {
            $(".case-color").animate({ marginLeft: '-2000px' }, function () { $(".case-color").fadeOut("fast"); });
        }

        if (id.includes("crane")) {
            $(".badge-crane").slideUp("fast", function () {
                $(".badge-flower").slideDown();
                $(".badge-crane").slideDown();
            });
        } else if (id.includes("flower")) {
            $(".badge-flower").slideUp("fast", function () {
                $(".badge-regular").slideDown();
                $(".badge-crane").slideDown();
            });
        } else {
            $(".badge-regular").slideUp("fast", function () {
                $(".badge-crane").slideDown();
                $(".badge-flower").slideDown();
            });
        }
    });

    $("input[name='badge-material']").change(function () {
        const id = $("input[type='radio'][name='badge-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".badge-alu-color").slideUp("fast", function () {
                $(".badge-pc-color").slideDown();
            });

            $(".badge-color").show();
            $(".badge-color").animate({ marginLeft: '0px' }, "fast");
        } else if (id.includes("pc")) {
            $(".badge-pc-color").slideUp("fast", function () {
                $(".badge-alu-color").slideDown();
            });

            $(".badge-color").show();
            $(".badge-color").animate({ marginLeft: '0px' }, "fast");
        } else {
            $(".badge-color").animate({ marginLeft: "-2000px" }, function () { $(".badge-color").fadeOut("fast"); });
        }
    });

    $("input[name='weight-style']").change(function () {
        const id = $("input[type='radio'][name='weight-style']:checked").attr("id");

        if (id.includes("regular")) {
            $(".subweight-material").animate({ marginLeft: "-2000px" }, function () { $(".subweight-material").fadeOut("fast"); });
            $(".subweight-color").slideDown();
        } else {
            $(".subweight-material").show();
            $(".subweight-material").animate({ marginLeft: '0px' }, "fast");
            $(".subweight-color").slideUp("fast");
        }
    });

    $("input[name='weight-material'").change(function () {
        const id = $("input[type='radio'][name='weight-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".weight-color").show();
            $(".weight-color").animate({ marginLeft: '0px' }, "fast");
        } else {
            $(".weight-color").animate({ marginLeft: "-2000px" }, function () { $(".weight-color").fadeOut("fast"); });
        }
    });

    $("input[name='subweight-material'").change(function () {
        const id = $("input[type='radio'][name='subweight-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".subweight-color").show();
            $(".subweight-color").animate({ marginLeft: '0px' }, "fast");
        } else {
            $(".subweight-color").animate({ marginLeft: "-2000px" }, function () { $(".subweight-color").fadeOut("fast"); });
        }
    });

    $("input[name='plate-material'").change(function () {
        const id = $("input[type='radio'][name='plate-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".plate-color").show();
            $(".plate-color").animate({ marginLeft: '0px' }, "fast");
            $(".plate-alu-color").slideUp("fast", function () {
                $(".plate-pc-color").slideDown();
                $(".plate-pom-color").slideDown();
            });
        } else if (id.includes("pc")) {
            $(".plate-color").show();
            $(".plate-color").animate({ marginLeft: '0px' }, "fast");
            $(".plate-pc-color").slideUp("fast", function () {
                $(".plate-alu-color").slideDown();
                $(".plate-pom-color").slideDown();
            });
        } else if (id.includes("pom")) {
            $(".plate-color").show();
            $(".plate-color").animate({ marginLeft: '0px' }, "fast");
            $(".plate-pom-color").slideUp("fast", function () {
                $(".plate-alu-color").slideDown();
                $(".plate-pc-color").slideDown();
            });
        } else {
            $(".plate-color").animate({ marginLeft: "-2000px" }, function () { $(".plate-color").fadeOut("fast"); });
        }
    });

    $("input[name='layout-case'][id='case-alu-wk']").prop("checked", true).change();
    $("input[name='case-color'][id='case-alu-eblack']").prop("checked", true).change();
    $("input[name='badge-material'][id='badge-alu']").prop("checked", true).change();
    $("input[name='badge-color'][id='badge-alu-ewhite']").prop("checked", true).change();
    $("input[name='weight-style'][id='weight-hybrid']").prop("checked", true).change();
    $("input[name='weight-material'][id='weight-alu']").prop("checked", true).change();
    $("input[name='weight-color'][id='weight-alu-ewhite']").prop("checked", true).change();
    $("input[name='subweight-color'][id='subweight-alu-eblack']").prop("checked", true).change();
    $("input[name='plate-material'][id='plate-alu']").prop("checked", true).change();
    $("input[name='plate-color'][id='plate-alu-ewhite']").prop("checked", true).change();
});