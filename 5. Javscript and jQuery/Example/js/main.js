$(function(){
    
    var introHeader = {
        firstName: 'Arik',
        lastName: 'Liber',
        title: 'Fullstack developer'
    };
    
    $('#intro header h1').text(introHeader.firstName);
    $('#intro header h2').text(introHeader.lastName);
    $('#intro header h3').text(introHeader.title);
    
    $ul = $('<ul>', {
        'id': 'social-networks'
    });
    
    var socialNetworks = [
        {
            name: 'Facebook',
            link: '#',
            'iconName': 'facebook'
        },
        {
            name: 'Linkedin',
            link: '#',
            'iconName': 'linkedin'
        },
        {
            name: 'Medium',
            link: '#',
            'iconName': 'medium'
        },
        {
            name: 'Email',
            link: '#',
            'iconName': 'envelope'
        },
        {
            name: 'Website',
            link: '#',
            'iconName': 'globe'
        }
    ];
    
    /*
        This is the structure we are trying to build
        <li>
            <i class="fa fa-medium" aria-hidden="true"></i>
            <a href="#">Medium</a>
        </li>
    */
    
    for(i in socialNetworks) {
        var $templi = $('<li>');
        $templi.append('<i class="fa fa-'+socialNetworks[i].iconName+'"></i>');
        $templi.append('<a href="'+socialNetworks[i].link+'">'+socialNetworks[i].name+'</a>');
        
        //Add the new li element to the ul
        $ul.append($templi);
    }
    
    $ul.insertAfter('#intro');
    
});