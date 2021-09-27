function updateRenders() {
    // Case
    if (!$("input[type='radio'][name='grp-layout']:checked").length ||
        !$("input[type='radio'][name='grp-case-color']:checked").length)
        return;
    const layout = $("input[type='radio'][name='grp-layout']:checked").attr("id").replace("case-", "");
    const caseColor = $("input[type='radio'][name='grp-case-color']:checked").attr("id").replace("case-", "");
    $(".configurator-viewer .render-bottom.top-view").attr("src", `assets/top-view/case-bottom/${caseColor}.png`);
    $(".configurator-viewer .render-bottom.side-view").attr("src", `assets/side-view/case-bottom/${caseColor}.png`);
    $(".configurator-viewer .render-bottom.bot-view").attr("src", `assets/bot-view/case-bottom/${caseColor}.png`);
    $(".configurator-viewer .render-top.top-view").attr("src", `assets/top-view/case-top/${layout}-${caseColor}.png`);
    $(".configurator-viewer .render-top.side-view").attr("src", `assets/side-view/case-top/${layout}-${caseColor}.png`);
    $(".configurator-viewer .render-top.bot-view").attr("src", `assets/bot-view/case-top/${caseColor}.png`);

    // Badge
    if (!$("input[type='radio'][name='grp-badge-color']:checked").length)
        return;
    let badge = $("input[type='radio'][name='grp-badge-color']:checked").attr("id").replace("badge-", "");
    if (layout.includes("crane")) {
        badge = "crane-" + badge;
    } else if (layout.includes("flower")) {
        badge = "flower-" + badge;
    }
    $(".configurator-viewer .render-badge.top-view").attr("src", `assets/top-view/badge/${badge}.png`);
    $(".configurator-viewer .render-badge.side-view").attr("src", `assets/side-view/badge/${badge}.png`);

    // Weight
    if (!$("input[type='radio'][name='grp-weight-style']:checked").length ||
        !$("input[type='radio'][name='grp-weight-color']:checked").length)
        return;
    const weightStyle = $("input[type='radio'][name='grp-weight-style']:checked").attr("id");
    const weight = $("input[type='radio'][name='grp-weight-color']:checked").attr("id").replace("weight-", "");
    $(".configurator-viewer .render-weight.top-view").attr("src", `assets/top-view/${weightStyle}/${weight}.png`);
    $(".configurator-viewer .render-weight.side-view").attr("src", `assets/side-view/${weightStyle}/${weight}.png`);
    $(".configurator-viewer .render-weight.bot-view").attr("src", `assets/bot-view/${weightStyle}/${weight}.png`);

    // Subweight
    if (!$("input[type='radio'][name='grp-subweight-color']:checked").length)
        return;
    if (weightStyle.includes("hybrid")) {
        const subweight = $("input[type='radio'][name='grp-subweight-color']:checked").attr("id").replace("subweight-", "");
        $(".configurator-viewer .render-subweight.top-view").attr("src", `assets/top-view/subweight/${subweight}.png`);
        $(".configurator-viewer .render-subweight.side-view").attr("src", `assets/side-view/subweight/${subweight}.png`);
        $(".configurator-viewer .render-subweight.bot-view").attr("src", `assets/bot-view/subweight/${subweight}.png`);
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
    $(".configurator-viewer .render-plate.bot-view").attr("src", `assets/bot-view/plate/${plate}.png`);
};

function isValidSelection() {
    if (!$("input[type='radio'][name='grp-layout']:checked").length ||
        !$("input[type='radio'][name='grp-case-color']:checked").length ||
        !$("input[type='radio'][name='grp-badge-color']:checked").length ||
        !$("input[type='radio'][name='grp-weight-style']:checked").length ||
        !$("input[type='radio'][name='grp-weight-color']:checked").length ||
        !$("input[type='radio'][name='grp-plate-color']:checked").length) {
        $(".price-number").text("N/A");
        return false;
    }

    const weightStyle = $("input[type='radio'][name='grp-weight-style']:checked").attr("id");
    if (weightStyle.includes("hybrid") &&
        !$("input[type='radio'][name='grp-subweight-color']:checked").length) {
        $(".price-number").text("N/A");
        return false;
    }

    return true;
};

function getCurrentConfig() {
    if (!isValidSelection())
        return "";

    const layout = $("input[type='radio'][name='grp-layout']:checked").parent("span").find("label").text().trim();
    const caseMaterial = $("input[type='radio'][name='grp-case-material']:checked").parent("span").find("label").text().trim();
    const caseColor = $("input[type='radio'][name='grp-case-color']:checked").parent("span").find("label").text().trim();
    const badgeMaterial = $("input[type='radio'][name='grp-badge-material']:checked").parent("span").find("label").text().trim();
    const badgeColor = $("input[type='radio'][name='grp-badge-color']:checked").parent("span").find("label").text().trim();
    const weightStyle = $("input[type='radio'][name='grp-weight-style']:checked").parent("span").find("label").text().trim();
    const weightMaterial = $("input[type='radio'][name='grp-weight-material']:checked").parent("span").find("label").text().trim();
    const weightColor = $("input[type='radio'][name='grp-weight-color']:checked").parent("span").find("label").text().trim();

    let configString = `<strong>Case</strong>: ${layout} ${caseMaterial} ${caseColor}<br><strong>Badge</strong>: ${badgeMaterial} ${badgeColor}<br><strong>Weight</strong>: ${weightStyle} ${weightMaterial} ${weightColor}<br>`;
    if (weightStyle.includes("Hybrid")) {
        const subweightMaterial = $("input[type='radio'][name='grp-subweight-material']:checked").parent("span").find("label").text().trim();
        const subweightColor = $("input[type='radio'][name='grp-subweight-color']:checked").parent("span").find("label").text().trim();
        configString += `<strong>Subweight</strong>: ${subweightMaterial} ${subweightColor}<br>`;
    }
    const plateMaterial = $("input[type='radio'][name='grp-plate-material']:checked").parent("span").find("label").text().trim();
    const plateColor = $("input[type='radio'][name='grp-plate-color']:checked").parent("span").find("label").text().trim();
    configString += `<strong>Plate</strong>: ${plateMaterial} ${plateColor}<br>`;

    const pcb = $("input[type='radio'][name='grp-pcb']:checked").parent("span").find("label").text().trim();
    configString += `<strong>PCB</strong>: ${pcb}`;

    return configString;
};

function exportConfig() {
    let config = "";
    config += String.fromCharCode($("input[name='grp-layout']").index($("input[name='grp-layout']:checked")) + 65);
    config += String.fromCharCode($("input[name='grp-case-material']").index($("input[name='grp-case-material']:checked")) + 65);
    config += String.fromCharCode($("input[name='grp-case-color']").index($("input[name='grp-case-color']:checked")) + 65);
    config += String.fromCharCode($("input[name='grp-badge-material']").index($("input[name='grp-badge-material']:checked")) + 65);
    config += String.fromCharCode($("input[name='grp-badge-color']").index($("input[name='grp-badge-color']:checked")) + 65);
    config += String.fromCharCode($("input[name='grp-weight-style']").index($("input[name='grp-weight-style']:checked")) + 65);
    config += String.fromCharCode($("input[name='grp-weight-material']").index($("input[name='grp-weight-material']:checked")) + 65);
    config += String.fromCharCode($("input[name='grp-weight-color']").index($("input[name='grp-weight-color']:checked")) + 65);
    config += String.fromCharCode($("input[name='grp-subweight-material']").index($("input[name='grp-subweight-material']:checked")) + 65);
    config += String.fromCharCode($("input[name='grp-subweight-color']").index($("input[name='grp-subweight-color']:checked")) + 65);
    config += String.fromCharCode($("input[name='grp-plate-material']").index($("input[name='grp-plate-material']:checked")) + 65);
    config += String.fromCharCode($("input[name='grp-plate-color']").index($("input[name='grp-plate-color']:checked")) + 65);
    config += String.fromCharCode($("input[name='grp-pcb']").index($("input[name='grp-pcb']:checked")) + 65);
    return config;
};

function importConfig(config) {
    $("input[name='grp-plate-color']").eq(config.charCodeAt(11) - 65).prop("checked", true).change();
    $("input[name='grp-plate-material']").eq(config.charCodeAt(10) - 65).prop("checked", true).change();

    $("input[name='grp-subweight-color']").eq(config.charCodeAt(9) - 65).prop("checked", true).change();
    $("input[name='grp-subweight-material']").eq(config.charCodeAt(8) - 65).prop("checked", true).change();

    $("input[name='grp-weight-color']").eq(config.charCodeAt(7) - 65).prop("checked", true).change();
    $("input[name='grp-weight-material']").eq(config.charCodeAt(6) - 65).prop("checked", true).change();
    $("input[name='grp-weight-style']").eq(config.charCodeAt(5) - 65).prop("checked", true).change();

    $("input[name='grp-badge-color']").eq(config.charCodeAt(4) - 65).prop("checked", true).change();
    $("input[name='grp-badge-material']").eq(config.charCodeAt(3) - 65).prop("checked", true).change();

    $("input[name='grp-case-color']").eq(config.charCodeAt(2) - 65).prop("checked", true).change();
    $("input[name='grp-case-material']").eq(config.charCodeAt(1) - 65).prop("checked", true).change();
    $("input[name='grp-layout']").eq(config.charCodeAt(0) - 65).prop("checked", true).change();

    $("input[name='grp-pcb']").eq(config.charCodeAt(12) - 65).prop("checked", true).change();
};

// Selection change events
function onGrpLayoutChange() {
    const id = $("input[type='radio'][name='grp-layout']:checked").attr("id");

    if (id.includes("crane") || id.includes("flower")) {
        $(".grp-case-material span:not(.case-alu)").fadeOut("fast");
        $(".grp-badge-material span:not(.badge-special)").fadeOut("fast");
        $(".grp-badge-color span:not(.badge-special-color)").fadeOut("fast");
    } else {
        $(".grp-case-material span:not(.case-alu)").fadeIn("fast");
        $(".grp-badge-material span:not(.badge-special)").fadeIn("fast");
        $("input[type='radio'][name='grp-badge-material']:checked").change();
    }

    // Check if selected Case material is still valid, if not select first valid option
    const selectedSpan = $("input[type='radio'][name='grp-case-material']:checked").parent();
    selectedSpan.parent().children().promise().done(function () {
        if (selectedSpan.filter(":hidden").length > 0) {
            $("input[type='radio'][name='grp-case-material']").parent().filter(":visible").first().find("input").prop("checked", true).change();
        }
    });

    // Check if selected Badge material is still valid, if not select first valid option
    const selectedSpan2 = $("input[type='radio'][name='grp-badge-material']:checked").parent();
    selectedSpan2.parent().children().promise().done(function () {
        if (selectedSpan2.filter(":hidden").length > 0) {
            $("input[type='radio'][name='grp-badge-material']").parent().filter(":visible").first().find("input").prop("checked", true).change();
        }
    });

    // Check if selected Badge color is still valid, if not select first valid option
    const selectedSpan3 = $("input[type='radio'][name='grp-badge-color']:checked").parent();
    selectedSpan3.parent().children().promise().done(function () {
        if (selectedSpan3.filter(":hidden").length > 0) {
            $("input[type='radio'][name='grp-badge-color']").parent().filter(":visible").first().find("input").prop("checked", true).change();
        }
    });

    updateRenders();
};

function onGrpCaseMaterialChange() {
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

    // Check if selected Case color is still valid, if not select first valid option
    const selectedSpan = $("input[type='radio'][name='grp-case-color']:checked").parent();
    selectedSpan.parent().children().promise().done(function () {
        if (selectedSpan.filter(":hidden").length > 0) {
            $("input[type='radio'][name='grp-case-color']").parent().filter(":visible").first().find("input").prop("checked", true).change();
        }
    });

    updateRenders();
};

function onGrpBadgeMaterialChange() {
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
            $(".grp-badge-color .badge-special-color").fadeIn("fast");
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

    // Check if selected Badge color is still valid, if not select first valid option
    const selectedSpan = $("input[type='radio'][name='grp-badge-color']:checked").parent();
    selectedSpan.parent().children().promise().done(function () {
        if (selectedSpan.filter(":hidden").length > 0) {
            $("input[type='radio'][name='grp-badge-color']").parent().filter(":visible").first().find("input").prop("checked", true).change();
        }
    });

    updateRenders();
};

function onGrpWeightStyleChange() {
    const id = $("input[type='radio'][name='grp-weight-style']:checked").attr("id");

    if (id == "weight-regular") {
        $(".weight-hybrid-color").fadeOut("fast");
        $(".cat-subweight").fadeOut("fast");
    } else {
        $(".cat-subweight").fadeIn("fast");
        if ($("input[type='radio'][name='grp-weight-material']:checked").length && $("input[type='radio'][name='grp-weight-material']:checked").attr("id").includes("brass")) {
            $(".weight-hybrid-color").fadeIn("fast");
        }
    }

    // Check if selected Weight color is still valid, if not select first valid option
    const selectedSpan = $("input[type='radio'][name='grp-weight-color']:checked").parent();
    selectedSpan.parent().children().promise().done(function () {
        if (selectedSpan.filter(":hidden").length > 0) {
            $("input[type='radio'][name='grp-weight-color']").parent().filter(":visible").first().find("input").prop("checked", true).change();
        }
    });

    updateRenders();
};

function onGrpWeightMaterialChange() {
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

    // Check if selected Weight color is still valid, if not select first valid option
    const selectedSpan = $("input[type='radio'][name='grp-weight-color']:checked").parent();
    selectedSpan.parent().children().promise().done(function () {
        if (selectedSpan.filter(":hidden").length > 0) {
            $("input[type='radio'][name='grp-weight-color']").parent().filter(":visible").first().find("input").prop("checked", true).change();
        }
    });

    updateRenders();
};

function onGrpSubweightMaterialChange() {

    const id = $("input[type='radio'][name='grp-subweight-material']:checked").attr("id");

    if (id.includes("alu")) {
        $(".grp-subweight-color span:not(.subweight-alu-color)").fadeOut("fast");
        $(".grp-subweight-color .subweight-alu-color").fadeIn("fast");
    } else {
        $(".grp-subweight-color span:not(.subweight-pc-color)").fadeOut("fast");
        $(".grp-subweight-color .subweight-pc-color").fadeIn("fast");
    }

    // Check if selected Sub-weight color is still valid, if not select first valid option
    const selectedSpan = $("input[type='radio'][name='grp-subweight-color']:checked").parent();
    selectedSpan.parent().children().promise().done(function () {
        if (selectedSpan.filter(":hidden").length > 0) {
            $("input[type='radio'][name='grp-subweight-color']").parent().filter(":visible").first().find("input").prop("checked", true).change();
        }
    });

    updateRenders();
};

function onGrpPlateMaterialChange() {
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

    // Check if selected Plate color is still valid, if not select first valid option
    const selectedSpan = $("input[type='radio'][name='grp-plate-color']:checked").parent();
    selectedSpan.parent().children().promise().done(function () {
        if (selectedSpan.filter(":hidden").length > 0) {
            $("input[type='radio'][name='grp-plate-color']").parent().filter(":visible").first().find("input").prop("checked", true).change();
        }
    });

    updateRenders();
};

$(document).ready(function () {
    $("input[name='grp-layout']").change(onGrpLayoutChange);
    $("input[name='grp-case-material']").change(onGrpCaseMaterialChange);
    $("input[name='grp-case-color']").change(function () {
        updateRenders();
    });

    $("input[name='grp-badge-material']").change(onGrpBadgeMaterialChange);
    $("input[name='grp-badge-color']").change(function () {
        updateRenders();
    });

    $("input[name='grp-weight-style']").change(onGrpWeightStyleChange);
    $("input[name='grp-weight-material']").change(onGrpWeightMaterialChange);
    $("input[name='grp-weight-color']").change(function () {
        updateRenders();
    });

    $("input[name='grp-subweight-material']").change(onGrpSubweightMaterialChange);
    $("input[name='grp-subweight-color']").change(function () {
        updateRenders();
    });

    $("input[name='grp-plate-material']").change(onGrpPlateMaterialChange);
    $("input[name='grp-plate-color']").change(function () {
        updateRenders();
    });

    $("#showcase .close-form").on("click", function (e) {
        $("#showcase").fadeOut("fast");
    });

    $('.showcase .carousel .carousel-item').each(function () {
        var minPerSlide = 3;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < minPerSlide; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });

    $(".showcase .carousel-inner .carousel-item img").click(function () {
        let index = $(this).data("index");
        $("#showcase").fadeIn("fast");
        $("#showcase .carousel-inner .carousel-item.active").removeClass("active");
        $("#showcase .carousel-inner .carousel-item:nth-child(" + index + ")").addClass("active");
    });

    $(".load-config").click(function () {
        const name = $(this).data("name");
        $("#showcase").fadeOut("fast");
        importConfig(name);
    })

    importConfig("AACABAABAEABA");
});