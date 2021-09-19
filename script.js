$(document).ready(function () {

    $("input[name='layout-case']").change(function () {
        const id = $("input[type='radio'][name='layout-case']:checked").attr("id");

        if (id.startsWith("case-alu")) {
            $(".case-color").fadeIn();
            $(".case-color").animate({ marginLeft: '0px' }, "linear", function () {
                $(".case-color span").not(".case-alu-color").delay("fast").fadeOut("fast", function () {
                    $(".case-alu-color").fadeIn("fast");
                });
            });
        } else if (id.startsWith("case-pc")) {
            $(".case-color").fadeIn();
            $(".case-color").animate({ marginLeft: '0px' }, "linear", function () {
                $(".case-color span").not(".case-pc-color").delay("fast").fadeOut("fast", function () {
                    $(".case-pc-color").fadeIn("fast");
                });
            });
        } else {
            $(".case-color").animate({ marginLeft: '-2000px' }, function () {
                $(".case-color").fadeOut("fast");
                $(".case-color span").fadeOut("fast");
            });
        }

        if (id.includes("crane")) {
            $(".badge-material span").not(".badge-crane").fadeOut("fast", function () {
                $(".badge-crane").fadeIn("fast");
            });
        } else if (id.includes("flower")) {
            $(".badge-material span").not(".badge-flower").fadeOut("fast", function () {
                $(".badge-flower").fadeIn("fast");
            });
        } else {
            $(".badge-material span").not(".badge-regular").fadeOut("fast", function () {
                $(".badge-regular").fadeIn("fast");
            });
        }
    });

    $("input[name='badge-material']").change(function () {
        const id = $("input[type='radio'][name='badge-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".badge-color").fadeIn();
            $(".badge-color").animate({ marginLeft: '0px' }, "fast", "linear", function () {
                $(".badge-color span").not(".badge-alu-color").delay("fast").fadeOut("fast", function () {
                    $(".badge-alu-color").fadeIn("fast");
                });
            });
        } else if (id.includes("pc")) {
            $(".badge-color").fadeIn();
            $(".badge-color").animate({ marginLeft: '0px' }, "fast", "linear", function () {
                $(".badge-color span").not(".badge-pc-color").delay("fast").fadeOut("fast", function () {
                    $(".badge-pc-color").fadeIn("fast");
                });
            });
        } else {
            $(".badge-color").animate({ marginLeft: "-2000px" }, function () {
                $(".badge-color").fadeOut("fast");
                $(".badge-color span").fadeOut("fast");
            });
        }
    });

    $("input[name='weight-style']").change(function () {
        const id = $("input[type='radio'][name='weight-style']:checked").attr("id");

        if (id.includes("regular")) {
            $(".subweight-material").animate({ marginLeft: "-2000px" }, function () { $(".subweight-material").fadeOut("fast"); });
            $(".subweight-color").animate({ marginLeft: "-2000px" }, function () { $(".subweight-color").fadeOut("fast"); });
        } else {
            $(".subweight-color").fadeIn();
            $(".subweight-color").animate({ marginLeft: '0px' }, "fast", "linear");
            $(".subweight-material").fadeIn();
            $(".subweight-material").animate({ marginLeft: '0px' }, "fast", "linear");
        }
    });

    $("input[name='weight-material'").change(function () {
        const id = $("input[type='radio'][name='weight-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".weight-color").fadeIn();
            $(".weight-color").animate({ marginLeft: '0px' }, "fast", "linear");
        } else {
            $(".weight-color").animate({ marginLeft: "-2000px" }, function () { $(".weight-color").fadeOut("fast"); });
        }
    });

    $("input[name='subweight-material'").change(function () {
        const id = $("input[type='radio'][name='subweight-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".subweight-color").fadeIn();
            $(".subweight-color").animate({ marginLeft: '0px' }, "fast", "linear");
        } else {
            $(".subweight-color").animate({ marginLeft: "-2000px" }, function () { $(".subweight-color").fadeOut("fast"); });
        }
    });

    $("input[name='plate-material'").change(function () {
        const id = $("input[type='radio'][name='plate-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".plate-color").fadeIn();
            $(".plate-color").animate({ marginLeft: '0px' }, "fast", "linear", function () {
                $(".plate-color span").not(".plate-alu-color").delay("fast").fadeOut("fast", function () {
                    $(".plate-alu-color").fadeIn("fast");
                });
            });
        } else if (id.includes("pc")) {
            $(".plate-color").fadeIn();
            $(".plate-color").animate({ marginLeft: '0px' }, "fast", "linear", function () {
                $(".plate-color span").not(".plate-pc-color").delay("fast").fadeOut("fast", function () {
                    $(".plate-pc-color").fadeIn("fast");
                });
            });
        } else if (id.includes("pom")) {
            $(".plate-color").fadeIn();
            $(".plate-color").animate({ marginLeft: '0px' }, "fast", "linear", function () {
                $(".plate-color span").not(".plate-pom-color").delay("fast").fadeOut("fast", function () {
                    $(".plate-pom-color").fadeIn("fast");
                });
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