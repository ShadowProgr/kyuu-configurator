$(document).ready(function () {

    $("input[name='layout-case']").change(function () {
        const id = $("input[type='radio'][name='layout-case']:checked").attr("id");

        if (id.startsWith("case-alu")) {
            $(".case-color").fadeIn("slow");
            $(".case-color").animate({ marginLeft: '0px' }, "fast", "linear", function() {
                $(".case-alu-color").delay("fast").fadeIn("fast", function () {
                    $(".case-pc-color").fadeOut("fast");
                });
            });
        } else if (id.startsWith("case-pc")) {
            $(".case-color").fadeIn("slow");
            $(".case-color").animate({ marginLeft: '0px' }, "fast", "linear", function() {
                $(".case-pc-color").delay("fast").fadeIn("fast", function () {
                    $(".case-alu-color").fadeOut("fast");
                });
            });
        } else {
            $(".case-color").animate({ marginLeft: '-2000px' }, function () { $(".case-color").fadeOut("fast"); });
        }

        if (id.includes("crane")) {
            $(".badge-crane").delay("fast").fadeIn("fast", function () {
                $(".badge-regular").fadeOut("fast");
                $(".badge-flower").fadeOut("fast");
            });
        } else if (id.includes("flower")) {
            $(".badge-flower").delay("fast").fadeIn("fast", function () {
                $(".badge-regular").fadeOut("fast");
                $(".badge-crane").fadeOut("fast");
            });
        } else {
            $(".badge-regular").delay("fast").fadeIn("fast", function () {
                $(".badge-crane").fadeOut("fast");
                $(".badge-flower").fadeOut("fast");
            });
        }
    });

    $("input[name='badge-material']").change(function () {
        const id = $("input[type='radio'][name='badge-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".badge-color").fadeIn("slow");
            $(".badge-color").animate({ marginLeft: '0px' }, "fast", "linear", function() {
                $(".badge-alu-color").delay("fast").fadeIn("fast", function () {
                    $(".badge-pc-color").fadeOut("fast");
                });
            });
        } else if (id.includes("pc")) {
            $(".badge-color").fadeIn("slow");
            $(".badge-color").animate({ marginLeft: '0px' }, "fast", "linear", function() {
                $(".badge-pc-color").delay("fast").fadeIn("fast", function () {
                    $(".badge-alu-color").fadeOut("fast");
                });
            });
        } else {
            $(".badge-color").animate({ marginLeft: "-2000px" }, function () { $(".badge-color").fadeOut("fast"); });
        }
    });

    $("input[name='weight-style']").change(function () {
        const id = $("input[type='radio'][name='weight-style']:checked").attr("id");

        if (id.includes("regular")) {
            $(".subweight-material").animate({ marginLeft: "-2000px" }, function () { $(".subweight-material").fadeOut("fast"); });
            $(".subweight-color").animate({ marginLeft: "-2000px" }, function () { $(".subweight-color").fadeOut("fast"); });
        } else {
            $(".subweight-color").fadeIn("slow");
            $(".subweight-color").animate({ marginLeft: '0px' }, "fast", "linear");
            $(".subweight-material").fadeIn("slow");
            $(".subweight-material").animate({ marginLeft: '0px' }, "fast", "linear");
        }
    });

    $("input[name='weight-material'").change(function () {
        const id = $("input[type='radio'][name='weight-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".weight-color").fadeIn("slow");
            $(".weight-color").animate({ marginLeft: '0px' }, "fast", "linear");
        } else {
            $(".weight-color").animate({ marginLeft: "-2000px" }, function () { $(".weight-color").fadeOut("fast"); });
        }
    });

    $("input[name='subweight-material'").change(function () {
        const id = $("input[type='radio'][name='subweight-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".subweight-color").fadeIn("slow");
            $(".subweight-color").animate({ marginLeft: '0px' }, "fast", "linear");
        } else {
            $(".subweight-color").animate({ marginLeft: "-2000px" }, function () { $(".subweight-color").fadeOut("fast"); });
        }
    });

    $("input[name='plate-material'").change(function () {
        const id = $("input[type='radio'][name='plate-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".plate-color").fadeIn("slow");
            $(".plate-color").animate({ marginLeft: '0px' }, "fast", "linear", function() {
                $(".plate-alu-color").delay("fast").fadeIn("fast", function () {
                    $(".plate-pc-color").fadeOut("fast");
                    $(".plate-pom-color").fadeOut("fast");
                });
            });
        } else if (id.includes("pc")) {
            $(".plate-color").fadeIn("slow");
            $(".plate-color").animate({ marginLeft: '0px' }, "fast", "linear", function() {
                $(".plate-pc-color").delay("fast").fadeIn("fast", function () {
                    $(".plate-alu-color").fadeOut("fast");
                    $(".plate-pom-color").fadeOut("fast");
                });
            });
        } else if (id.includes("pom")) {
            $(".plate-color").fadeIn("slow");
            $(".plate-color").animate({ marginLeft: '0px' }, "fast", "linear", function() {
                $(".plate-pom-color").delay("fast").fadeIn("fast", function () {
                    $(".plate-alu-color").fadeOut("fast");
                    $(".plate-pc-color").fadeOut("fast");
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