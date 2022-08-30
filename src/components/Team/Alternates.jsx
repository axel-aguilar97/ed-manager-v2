import { connect } from "react-redux";
import styled from "styled-components";

import defaultImage from "../../assets/resources/default_photo.png";

/* Styles */
// TODO: move styling to a separate file containing styles only
const SectionAlternates = styled.section`
  padding: 8px;
  background: #2b2c28;
  border-radius: 6px;
`;

const DivAlternates = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

const ArticleAlternate = styled.article`
  flex: 0 0 auto;
  flex-direction: column;
  width: auto;
  max-width: 100%;
  height: 100px;
  margin: 4px;
  padding: 8px;
  display: flex;
  align-items: center;
  transition: 0.5s;

  div {
    position: relative;
  }

  img {
    width: 72px;
    height: 72px;
    margin-bottom: 5px;
    object-fit: cover;
    border-radius: 100%;
  }

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

  p {
    padding: 0 16px;
    color: #fff;
    background: #131515;
    line-height: 2;
    font-size: 14px;
    border-radius: 16px;
  }

  &:hover {
    button {
      display: flex;
    }
  }
`;

/* Main */
const Alternates = ({ alternates, removeAlternate }) => {
  return (
    <SectionAlternates className="container">
      <h2 className="d-flex justify-content-center">Alternates</h2>
      <DivAlternates>
        {alternates.length > 0 ? (
          alternates.map((a) => (
            <ArticleAlternate key={a.id}>
              <div>
                <img src={a.photo ? a.photo : defaultImage} alt={a.name} />
                <button onClick={() => removeAlternate(a)}>X</button>
              </div>
              <p>{a.name}</p>
            </ArticleAlternate>
          ))
        ) : (
          <p className="m-0 fs-4 text-center">No alterantes yet.</p>
        )}
      </DivAlternates>
    </SectionAlternates>
  );
};

const mapStateToProps = (state) => ({
  alternates: state.alternates,
});

const mapDispatchToProps = (dispatch) => ({
  removeAlternate(player) {
    dispatch({
      type: "REMOVE_ALTERNATE",
      player,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Alternates);
