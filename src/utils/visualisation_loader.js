export default async function visualisationWrapper(_data, _charts) {
  const {
    default: Visualisation,
  } = await import(/* webpackChunkName: 'visualisation' */ '../components/Visualisation');
  const { default: Charts } = await _charts();
  const data = await _data();

  return { default: Visualisation(data, Charts) };
}
