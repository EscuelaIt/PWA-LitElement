export const UPDATE_PAGE = 'UPDATE_PAGE';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const UPDATE_SEGMENTS = 'UPDATE_SEGMENTS';
export const UPDATE_METADATA = 'UPDATE_METADATA';
export const SEND_FEEDBACK = 'SEND_FEEDBACK';

const sendFeedback = (feedback) => {
  return {
    type: SEND_FEEDBACK,
    feedback
  }
}

export const positiveFeedback = (msg) => {
  return sendFeedback({
    msg,
    status: 'success'
  })
}
export const negativeFeedback = (msg) => {
  return sendFeedback({
    msg,
    status: 'error'
  })
}

export const startLoading = () => {
  return {
    type: START_LOADING
  }
}

export const stopLoading = () => {
  return {
    type: STOP_LOADING
  }
}

export const navigate = (path) => dispatch => {
  const url = (path === '/') ? 'home' : path.slice(1);
  // separo segmentos
  const decodedUrl = decodeUrl(url);
  //console.log(decodedUrl);
  dispatch(loadPage(decodedUrl.page));
  dispatch(loadSection(decodedUrl.page, decodedUrl.segments))
}

const loadSection = (page, segments) => (dispatch) => {
  let pageSection = '';
  let pageParameter = '';
  if(segments.length > 0) {
    pageSection = segments[0];
    if(page == 'headquarters') {
      switch(pageSection) {
        case 'madrid':
          import('../../headquarters/headquarters-madrid-view');
          break;
        case 'barcelona':
          import('../../headquarters/headquarters-barcelona-view');
          break
        default:
          dispatch(loadPage('404'));
      }
    } else if(page == 'pelis') {
      switch(pageSection) {
        case 'list':
          import('../../pelis/pelis-list-view');
          break;
        case 'insert':
          import('../../pelis/pelis-insert-view');
          break
        case 'edit':
          import('../../pelis/pelis-edit-view');
          break
            
        default:
          dispatch(loadPage('404'));
      }
    }
  }
  if(segments.length > 1) {
    pageParameter = segments[1];
  }
  dispatch(updateSegments(pageSection, pageParameter));
}

const updateSegments = (pageSection, pageParameter) => {
  return {
    type: UPDATE_SEGMENTS,
    pageSection,
    pageParameter
  }
}

export const loadPage = (page) => (dispatch) => {

  switch(page) {
    case 'home':
      import('../../views/view-home.js');
      break;
    case 'login':
      import('../../views/view-login.js');
      break;
    case 'about':
      import('../../views/view-about.js');
      break;
    case 'contact':
      import('../../views/view-contact.js');
      break;
    case 'map':
      import('../../views/view-map.js');
      break;
    case 'headquarters':
      import('../../views/view-headquarters.js');
      break;
    case 'pelis':
        import('../../views/view-pelis.js');
        break;
    default: 
      import('../../views/view-404.js');
      page = '404';
      break;
  }
  dispatch(updatePage(page));
}

export const updatePage = (page) => {
  return {
    type: UPDATE_PAGE,
    page
  }
}

export const navigateDelay = (page) => (dispatch) => {
  dispatch(startLoading());
  setTimeout(() => {
    dispatch(stopLoading());
    dispatch(navigate(page));
  }, 3000);
}

const decodeUrl = (url) => {
  const segments = url.split('/');
  const page = segments.shift();
  return {
    page,
    segments
  }
}

export const updateMetadata = (metadata) => {
  return {
    type: UPDATE_METADATA,
    metadata
  }
}



