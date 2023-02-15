const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9029a9a935mshf04a0ed3bd0cf08p1cb7d1jsncd51adb928e3',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UCvXyEzHeLk_uWREo5P4KJ3g&part=snippet%2Cid&order=date&maxResults=5', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));