
function regPress() {
	var $press = $('#press');

	if ($press.is(':visible')) {
		$press.hide('medium');
	}
	else {
		$press.show('medium');
	};
};

$(document).mouseup(function (e) {
    var $mess = $("#press");

    if (!$mess.is(e.target) && $mess.has(e.target).length === 0) {    //Not self or any DOM child
        $mess.hide('medium');
    }
});
