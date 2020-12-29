import gql from 'graphql-tag';

export const QUERY_LAUNCH = gql`
    query Launches{
        launches{
        flight_number
        mission_name
        launch_success
        launch_year
        links{
            flickr_images
            mission_patch_small
        }
        upcoming
    }
}
`;