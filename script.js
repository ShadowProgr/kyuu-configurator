function updateRenders() {
    // Case
    if (!$("input[type='radio'][name='grp-layout']:checked").length
            || !$("input[type='radio'][name='grp-case-color']:checked").length)
        return;
    const layout = $("input[type='radio'][name='grp-layout']:checked").attr("id").replace("case-", "");
    const caseColor = $("input[type='radio'][name='grp-case-color']:checked").attr("id").replace("case-", "");
    $(".configurator-viewer .render-bottom.top-view").attr("src", `assets/top-view/case-bottom/${caseColor}.png`);
    $(".configurator-viewer .render-bottom.side-view").attr("src", `assets/side-view/case-bottom/${caseColor}.png`);
    $(".configurator-viewer .render-top.top-view").attr("src", `assets/top-view/case-top/${layout}-${caseColor}.png`);
    $(".configurator-viewer .render-top.side-view").attr("src", `assets/side-view/case-top/${layout}-${caseColor}.png`);

    // Badge
    if (!$("input[type='radio'][name='grp-badge-color']:checked").length)
        return;
        let badge = $("input[type='radio'][name='grp-badge-color']:checked").attr("id").replace("badge-", "");
        if (layout.includes("crane")) {
            badge = "crane-" + badge;
        } else if (layout.includes("flower")) {
            badge = "flower-" + badge;
        }
        $(".configurator-viewer .render-badge.top-view").attr("src", `assets/top-view/badge/${badge}.png?raw=true`);
        $(".configurator-viewer .render-badge.side-view").attr("src", `assets/side-view/badge/${badge}.png?raw=true`);
    
    // Weight
    if (!$("input[type='radio'][name='grp-weight-style']:checked").length
            || !$("input[type='radio'][name='grp-weight-color']:checked").length)
        return;
    const weightStyle = $("input[type='radio'][name='grp-weight-style']:checked").attr("id");
    const weight = $("input[type='radio'][name='grp-weight-color']:checked").attr("id").replace("weight-", "");
    $(".configurator-viewer .render-weight.top-view").attr("src", `assets/top-view/${weightStyle}/${weight}.png`);
    $(".configurator-viewer .render-weight.side-view").attr("src", `assets/side-view/${weightStyle}/${weight}.png`);

    // Subweight
    if (!$("input[type='radio'][name='grp-subweight-color']:checked").length)
        return;
    if (weightStyle.includes("hybrid")) {
        const subweight = $("input[type='radio'][name='grp-subweight-color']:checked").attr("id").replace("subweight-", "");
        $(".configurator-viewer .render-subweight.top-view").attr("src", `assets/top-view/subweight/${subweight}.png`);
        $(".configurator-viewer .render-subweight.side-view").attr("src", `assets/side-view/subweight/${subweight}.png`);
        $(".configurator-viewer .render-subweight").show();
    } else {
        $(".configurator-viewer .render-subweight").hide();
    }

    // Plate
    if (!$("input[type='radio'][name='grp-plate-color']:checked").length)
        return;
    const plate = $("input[type='radio'][name='grp-plate-color']:checked").attr("id").replace("plate-", "");
    $(".configurator-viewer .render-plate.top-view").attr("src", `assets/top-view/plate/${plate}.png`);
    $(".configurator-viewer .render-plate.side-view").attr("src", `assets/side-view/plate/${plate}.png`);
};

$(document).ready(function () {
    $("input[name='grp-layout']").change(function () {
        const id = $("input[type='radio'][name='grp-layout']:checked").attr("id");

        if (id.includes("crane") || id.includes("flower")) {
            $(".grp-case-material span:not(.case-alu)").fadeOut("fast");
            $(".grp-badge-material span:not(.crane)").fadeOut("fast");
            $(".grp-badge-color span:not(.crane)").fadeOut("fast");
        } else {
            $(".grp-case-material .case-pc").fadeIn("fast");
            $(".grp-badge-material .kyuu").fadeIn("fast");
            if (id.includes("wkl")) {
                $(".grp-case-material .case-copper").fadeOut("fast");
            } else {
                $(".grp-case-material .case-copper").fadeIn("fast");
            }
        }
        updateRenders();
    });

    $("input[name='grp-case-material']").change(function () {
        const id = $("input[type='radio'][name='grp-case-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".grp-case-color span:not(.case-alu-color)").fadeOut("fast");
            $(".grp-case-color .case-alu-color").fadeIn("fast");
        } else if (id.includes("pc")) {
            $(".grp-case-color span:not(.case-pc-color)").fadeOut("fast");
            $(".grp-case-color .case-pc-color").fadeIn("fast");
        } else {
            $(".grp-case-color span:not(.case-copper-color)").fadeOut("fast");
            $(".grp-case-color .case-copper-color").fadeIn("fast");
        }
        updateRenders();
    });

    $("input[name='grp-case-color']").change(function () {
        const id = $("input[type='radio'][name='grp-case-color']:checked").attr("id");

        updateRenders();
    });
    
    $("input[name='grp-badge-material']").change(function () {
        const id = $("input[type='radio'][name='grp-badge-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".grp-badge-color span:not(.badge-alu-color)").fadeOut("fast");
            $(".grp-badge-color .badge-alu-color").fadeIn("fast");
        } else if (id.includes("pc")) {
            $(".grp-badge-color span:not(.badge-pc-color)").fadeOut("fast");
            $(".grp-badge-color .badge-pc-color").fadeIn("fast");
        } else if (id.includes("brass")) {
            const layout = $("input[type='radio'][name='grp-layout']:checked").attr("id");
            if (layout.includes("crane") || layout.includes("flower")) {
                $(".grp-badge-color .crane").fadeIn("fast");
            } else {
                $(".grp-badge-color .badge-brass-color").fadeIn("fast");
            }
            $(".grp-badge-color span:not(.badge-brass-color)").fadeOut("fast");
        } else if (id.includes("copper")) {
            $(".grp-badge-color span:not(.badge-copper-color)").fadeOut("fast");
            $(".grp-badge-color .badge-copper-color").fadeIn("fast");
        } else {
            $(".grp-badge-color span:not(.badge-ss-color)").fadeOut("fast");
            $(".grp-badge-color .badge-ss-color").fadeIn("fast");
        }
        updateRenders();
    });

    $("input[name='grp-badge-color']").change(function () {
        const id = $("input[type='radio'][name='grp-badge-color']:checked").attr("id");

        updateRenders();
    });

    $("input[name='grp-weight-style']").change(function () {
        const id = $("input[type='radio'][name='grp-weight-style']:checked").attr("id");

        if (id == "weight-regular") {
            $(".grp-subweight-material").fadeOut("fast");
            $(".grp-subweight-color").fadeOut("fast");
            $(".weight-hybrid-color").fadeOut("fast");
        } else {
            $(".grp-subweight-material").fadeIn("fast");
            $(".grp-subweight-color").fadeIn("fast");
            if ($("input[type='radio'][name='grp-weight-material']:checked").length && $("input[type='radio'][name='grp-weight-material']:checked").attr("id").includes("brass")) {
                $(".weight-hybrid-color").fadeIn("fast");
            }
        }
        updateRenders();
    });

    $("input[name='grp-weight-material']").change(function () {
        const id = $("input[type='radio'][name='grp-weight-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".grp-weight-color span:not(.weight-alu-color)").fadeOut("fast");
            $(".grp-weight-color .weight-alu-color").fadeIn("fast");
        } else if (id.includes("pc")) {
            $(".grp-weight-color span:not(.weight-pc-color)").fadeOut("fast");
            $(".grp-weight-color .weight-pc-color").fadeIn("fast");
        } else if (id.includes("brass")) {
            $(".grp-weight-color span:not(.weight-brass-color)").fadeOut("fast");
            if ($("input[type='radio'][name='grp-weight-style']:checked").attr("id") == "weight-regular") {
                $(".grp-weight-color .weight-brass-color:not(.weight-hybrid-color)").fadeIn("fast");
            } else {
                $(".grp-weight-color .weight-brass-color").fadeIn("fast");
            }
        } else if (id.includes("copper")) {
            $(".grp-weight-color span:not(.weight-copper-color)").fadeOut("fast");
            $(".grp-weight-color .weight-copper-color").fadeIn("fast");
        } else {
            $(".grp-weight-color span:not(.weight-ss-color)").fadeOut("fast");
            $(".grp-weight-color .weight-ss-color").fadeIn("fast");
        }
        updateRenders();
    });

    $("input[name='grp-weight-color']").change(function () {
        const id = $("input[type='radio'][name='grp-weight-color']:checked").attr("id");

        updateRenders();
    });

    $("input[name='grp-subweight-material']").change(function () {
        const id = $("input[type='radio'][name='grp-subweight-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".grp-subweight-color span:not(.subweight-alu-color)").fadeOut("fast");
            $(".grp-subweight-color .subweight-alu-color").fadeIn("fast");
        } else {
            $(".grp-subweight-color span:not(.subweight-pc-color)").fadeOut("fast");
            $(".grp-subweight-color .subweight-pc-color").fadeIn("fast");
        }
        updateRenders();
    });

    $("input[name='grp-subweight-color']").change(function () {
        const id = $("input[type='radio'][name='grp-subweight-color']:checked").attr("id");

        updateRenders();
    });

    $("input[name='grp-plate-material']").change(function () {
        const id = $("input[type='radio'][name='grp-plate-material']:checked").attr("id");

        if (id.includes("alu")) {
            $(".grp-plate-color span:not(.plate-alu-color)").fadeOut("fast");
            $(".grp-plate-color .plate-alu-color").fadeIn("fast");
        } else if (id.includes("pc")) {
            $(".grp-plate-color span:not(.plate-pc-color)").fadeOut("fast");
            $(".grp-plate-color .plate-pc-color").fadeIn("fast");
        } else if (id.includes("brass")) {
            $(".grp-plate-color span:not(.plate-brass-color)").fadeOut("fast");
            $(".grp-plate-color .plate-brass-color").fadeIn("fast");
        } else if (id.includes("copper")) {
            $(".grp-plate-color span:not(.plate-copper-color)").fadeOut("fast");
            $(".grp-plate-color .plate-copper-color").fadeIn("fast");
        } else {
            $(".grp-plate-color span:not(.plate-pom-color)").fadeOut("fast");
            $(".grp-plate-color .plate-pom-color").fadeIn("fast");
        }
        updateRenders();
    });

    $("input[name='grp-plate-color']").change(function () {
        const id = $("input[type='radio'][name='grp-plate-color']:checked").attr("id");

        updateRenders();
    });

    $(".price").hide();

    $("input[name='grp-layout'][id='wkl']").prop("checked", true).change();
    $("input[name='grp-case-material'][id='case-alu']").prop("checked", true).change();
    $("input[name='grp-case-color'][id='case-alu-ewhite']").prop("checked", true).change();
    $("input[name='grp-badge-material'][id='badge-alu']").prop("checked", true).change();
    $("input[name='grp-badge-color'][id='badge-alu-eblack']").prop("checked", true).change();
    $("input[name='grp-weight-style'][id='weight-hybrid']").prop("checked", true).change();
    $("input[name='grp-weight-material'][id='weight-alu']").prop("checked", true).change();
    $("input[name='grp-weight-color'][id='weight-alu-eblack']").prop("checked", true).change();
    $("input[name='grp-subweight-material'][id='subweight-alu']").prop("checked", true).change();
    $("input[name='grp-subweight-color'][id='subweight-alu-ewhite']").prop("checked", true).change();
    $("input[name='grp-plate-material'][id='plate-pom']").prop("checked", true).change();
    $("input[name='grp-plate-color'][id='plate-pom-black']").prop("checked", true).change();
});