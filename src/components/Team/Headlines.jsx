import { connect } from 'react-redux';
import styled from 'styled-components';

import defaultImage from '../../assets/resources/default_photo.png';
import soccerField from '../../assets/resources/soccer_field.svg';

/* Styles */
const SectionHeadlines = styled.section`
    margin-bottom: 20px;
    background: #2b2c28;
`;

const ArticleHeadline = styled.article`
    button {
        position: absolute;
        display: none;
        align-items: center;
        justify-content: center;
        width: 1.15rem;
        height: 1.15rem;
        top: -4px;
        right: -4px;
        color: #000;
        background: #339989;
        border: none;
        border-radius: 6px;
    }

    button:hover {
        background: #7de2d1;
    }

    &:hover {
        button {
            display: flex;
        }
    }
`;

const DivSoccerField = styled.div`
    margin: 0 auto;
    width: 75%;
    position: relative;

    ${ArticleHeadline} {
        position: absolute;

        img {
            width: 48px;
            height: 48px;
            margin-bottom: 5px;
            object-fit: cover;
            border-radius: 100%;
        }

        p {
            @media screen and (max-width: 640px) {
                display: none;
            }
        }
    }

    ${ArticleHeadline}:first-child {
        left: 5%;
        top: 50%;
        transform: translateY(-25%);
    }

    ${ArticleHeadline}:nth-child(2) {
        left: 30%;
        top: 10%;
    }

    ${ArticleHeadline}:nth-child(3) {
        left: 25%;
        top: 30%;
    }

    ${ArticleHeadline}:nth-child(4) {
        left: 25%;
        top: 50%;
    }

    ${ArticleHeadline}:nth-child(5) {
        left: 30%;
        top: 75%;
    }

    ${ArticleHeadline}:nth-child(6) {
        left: 50%;
        top: 30%;
        transform: translateX(-50%);
    }

    ${ArticleHeadline}:nth-child(7) {
        left: 50%;
        top: 55%;
        transform: translateX(-50%);
    }

    ${ArticleHeadline}:nth-child(8) {
        left: 60%;
        top: 15%;
    }

    ${ArticleHeadline}:nth-child(9) {
        left: 60%;
        top: 70%;
    }

    ${ArticleHeadline}:nth-child(10) {
        left: 70%;
        top: 50%;
    }

    ${ArticleHeadline}:nth-child(11) {
        left: 80%;
        top: 30%;
    }
`;

/* Main */
const Headlines = ({headlines, removeHeadline}) => {
    return (
        <SectionHeadlines className="container p-2 rounded">
            <h2 className="d-flex justify-content-center">Headlines</h2>
            <DivSoccerField>
                {
                    headlines.map(h => (
                        <ArticleHeadline key={h.id}>
                            <div>
                                <img src={((h.photo) ? h.photo : defaultImage)} alt={h.name} />
                                <button onClick={() => removeHeadline(h)}>X</button>
                            </div>
                            <p>{h.name}</p>
                        </ArticleHeadline>
                    ))
                }

                <img src={soccerField} alt="Soccer Field" />
            </DivSoccerField>
        </SectionHeadlines>
    )
}

const mapStateToProps = state  => ({
    headlines: state.headlines
});

const mapDispatchToProps = dispatch => ({
    removeHeadline(player) {
        dispatch({
            type: "REMOVE_HEADLINE",
            player
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Headlines);
