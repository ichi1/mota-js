function icons() {

}

icons.prototype.init = function () {
    this.icons = icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1;
    delete(icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1);
}

icons.prototype.getIcons = function () {
    return this.icons;
}

main.instance.icons = new icons();