$(document).ready(function () {

  function checkAllBox()
  {
    const $allCheck = $('#all');
    const $checkBoxes = $('#groups input');

    let checked = true;
    $checkBoxes.each(function () {
      if (!$(this).prop('checked')) {
        checked = false;
      }
    });

    if (checked) {
      $allCheck.prop("checked", true);
    }
    else {
      $allCheck.prop("checked", false);
    }
  }

  function checkSubBoxes(checked) {
    const $subBoxes = $('#groups input');


    if (checked) {
      $subBoxes.prop("checked", true);
    }
    else {
      $subBoxes.prop("checked", false);
    }
  }

  $('#all').change( function () {
    const $sections = $('.menu-section');
    if (this.checked) {
      $sections.removeClass('hidden');
    } else {
      $sections.addClass('hidden');
    }
    checkSubBoxes(this.checked);
  })

  $('#appetizers').change(function () {
    const $section = $('.appetizers');
    if (this.checked) {
      $section.removeClass('hidden');
    } else {
      $section.addClass('hidden');
    }
    checkAllBox()
  });

  $('#pizza').change(function () {
    const $section = $('.pizza')
    if (this.checked) {
      $section.removeClass('hidden');
    } else {
      $section.addClass('hidden');
    }
    checkAllBox()

  });

  $('#pasta').change(function () {
    const $section = $('.pasta')
    if (this.checked) {
      $section.removeClass('hidden');
    } else {
      $section.addClass('hidden');
    }
    checkAllBox()

  });

  $('#salad').change(function () {
    const $section = $('.salad')
    if (this.checked) {
      $section.removeClass('hidden');
    } else {
      $section.addClass('hidden');
    }
    checkAllBox()

  });

  $('#sandwiches').change(function () {
    const $section = $('.sandwiches')
    if (this.checked) {
      $section.removeClass('hidden');
    } else {
      $section.addClass('hidden');
    }
    checkAllBox()

  });

  $('#cocktails').change(function () {
    const $section = $('.cocktails')
    if (this.checked) {
      $section.removeClass('hidden');
    } else {
      $section.addClass('hidden');
    }
    checkAllBox()

  });
});
